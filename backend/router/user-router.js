const express = require("express");
const { registerUser, loginUser } = require("../controller/user-controller");

const userRouter = express.Router();

userRouter.route("/addnewuser").post(registerUser);
userRouter.route("/loginuser").post(loginUser);

module.exports = userRouter;
