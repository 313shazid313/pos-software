const express = require("express");
const { createRole } = require("../controller/role-controller");

const roleRouter = express.Router();

roleRouter.route("/addnewrole").post(createRole);

module.exports = roleRouter;
