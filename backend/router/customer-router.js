const express = require("express");
const customerRouter = express.Router();

const {
    createCustomer,
    getAllCustomer,
    editCustomer,
    deleteCustomer,
    getASingleCustomer,
} = require("../controller/customer-controller");

customerRouter.route("/customer/create").post(createCustomer);
customerRouter.route("/customer/get-all").get(getAllCustomer);
customerRouter.route("/customer/edit/:id").put(editCustomer);
customerRouter.route("/customer/delete/:id").delete(deleteCustomer);
customerRouter.route("/customer/single-customer/:id").get(getASingleCustomer);

module.exports = customerRouter;
