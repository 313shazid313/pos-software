const express = require("express");
const { registerUser, loginUser,getAllUser } = require("../controller/user-controller");

const userRouter = express.Router();

userRouter.route("/addnewuser").post(registerUser);
userRouter.route("/loginuser").post(loginUser);
userRouter.route("/getting-users").get(getAllUser)

module.exports = userRouter;
