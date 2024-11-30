const express = require("express");
const supplierRouter = express.Router();

const {
  createSupplier,
  getAllSupplier,
  editSupplier,
  deleteSupplier,
  getASingleSupplier
} = require("../controller/supplier-controoller");

supplierRouter.route("/supplier/create").post(createSupplier);
supplierRouter.route("/supplier/get-all").get(getAllSupplier);
supplierRouter.route("/supplier/edit/:id").put(editSupplier);
supplierRouter.route("/supplier/delete/:id").delete(deleteSupplier);
supplierRouter.route("/supplier/single-supplier/:id").get(getASingleSupplier);

module.exports = supplierRouter;
