const User = require("../model/user-model");
const Role = require("../model/role-model");
const ProductRolePermission = require("../model/role-models/product-role-permission-model");

const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { username, password, email, mobile, RoleId, status } = req.body;

    const isUsernameExist = await User.findOne({
      where: { username: username },
    });

    if (isUsernameExist) {
      res.status(409).json({ message: "Username already exist" });
    }

    //! hashing password -------->
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    //! creatin user ------->
    const userData = await User.create({
      username,
      password: hash,
      email,
      mobile,
      RoleId,
      status,
    });

    const roleData = await Role.findOne({ where: { id: RoleId } });

    return res
      .status(201)
      .json({ message: "Registration successful", userData, roleData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username);

    //! checking if the user exist in the database ------->
    const existUser = await User.findOne({ where: { username: username } });
    if (!existUser) {
      return res.status(404).json({ message: "User not found" });
    }
    // console.log(existUser);

    //! checking password is valid or not ----->
    const isValid = await bcrypt.compare(password, existUser.password);
    if (!isValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    //! getting role data from database ------>
    const roleId = existUser.RoleId;
    const roleData = await Role.findOne({ where: { id: roleId } });

    //! getting product permission data -------->
    const ProductPermissionData = await ProductRolePermission.findOne({
      where: { id: roleId },
    });

    //! making payload for token -------->
    const payloadData = {
      id: existUser.id,
      username: existUser.username,
      roleData,
      ProductPermissionData,
    };
    // console.log(payloadData);


    //! making token ---------->
    const token = jwt.sign(payloadData, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // res.cookie("token", token, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: "None",
    // });

    
    return res.json({ message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred during login",
      error: error.message,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const allUser = await User.findAll();
    return res.json({ message: "getting all users", allUser });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

module.exports = { registerUser, loginUser, getAllUser };
