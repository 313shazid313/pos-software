const express = require("express");
const {
  createRole,
  getAllRole,
  updateRole,
  deleteRole,
} = require("../controller/role-controller");

// const authenticateToken = require("../middleware/verifyToken");
const accessMiddleware = require("../middleware/access-middleware");

const roleRouter = express.Router();

roleRouter.route("/addnewrole").post(createRole);

// roleRouter
//   .route("/getallrole")
//   .get(accessMiddleware({ CanReadData: true }), getAllRole);

roleRouter.route("/getallrole").get(getAllRole);
roleRouter.route("/update-role/:id").put(updateRole);
roleRouter.route("/delete-role/:id").delete(deleteRole);

module.exports = roleRouter;
