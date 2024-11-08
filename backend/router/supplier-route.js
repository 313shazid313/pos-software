const express = require("express");
const supplierRouter = express.Router();

const {
  createSupplier,
  getAllSupplier,
  editSupplier,
  deleteSupplier,
} = require("../controller/supplier-controoller");

supplierRouter.route("/supplier/create").post(createSupplier);
supplierRouter.route("/supplier/get-all").get(getAllSupplier);
supplierRouter.route("/supplier/edit/:id").put(editSupplier);
supplierRouter.route("/supplier/delete/:id").delete(deleteSupplier);

module.exports = supplierRouter;
