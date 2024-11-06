const User = require("../model/user-model");
const Role = require("../model/role-model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const registerUser = async (req, res) => {
  try {
    const { username, password, email, mobile, RoleId } = req.body;
    const isUsernameExist = await User.findOne({
      where: { username: username },
    });

    if (isUsernameExist) {
      res.status(409).json({ message: "Username already exist" });
    }

    //? hashing password -------->
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    //? hashing password -------->

    const data = await User.create({
      username,
      password: hash,
      email,
      mobile,
      RoleId,
    });

    const roleData = await Role.findOne({ where: { id: RoleId } });

    return res
      .status(201)
      .json({ message: "Registration successful", data, roleData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existUser = await User.findOne({ username });
    if (!existUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isValid = await bcrypt.compare(password, existUser.password);
    // console.log( existUser.password)
    // console.log(existUser)
    if (!isValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    return res.json({ message: "Login successful" });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "An error occurred during login",
        error: error.message,
      });
  }
};

module.exports = { registerUser, loginUser };
