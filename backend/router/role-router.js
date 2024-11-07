const express = require("express");
const {
  createRole,
  getAllRole,
  updateRole,
  deleteRole,
} = require("../controller/role-controller");

const roleRouter = express.Router();

roleRouter.route("/addnewrole").post(createRole);
roleRouter.route("/getallrole").get(getAllRole);
roleRouter.route("/update-role/:id").put(updateRole);
roleRouter.route("/delete-role/:id").delete(deleteRole);

module.exports = roleRouter;
