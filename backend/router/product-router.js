const express = require("express");
const productRoute = express.Router();

const {
  createProductBrand,
  getAllBrands,
  deleteABrands,
} = require("../controller/product-controller/product-additionals-controller/product-brand-controller");

const {
  createProductCategory,
  getAllCategory,
  deleteACategory,
} = require("../controller/product-controller/product-additionals-controller/product-category-controller");

const {
  createProductOrigin,
  getAllOrigin,
  deleteAOrigin,
} = require("../controller/product-controller/product-additionals-controller/product-origin-controller");

const {
  createProductType,
  getAllTypes,
  deleteAType,
} = require("../controller/product-controller/product-additionals-controller/product-type-controller");

const {
  createProductUnit,
  getAllUnit,
  deleteAnUnit,
} = require("../controller/product-controller/product-additionals-controller/product-unit-controller");

const {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product-controller/product-controller");

//for brand
productRoute.route("/brand/create-brand").post(createProductBrand);
productRoute.route("/brand/get-all-brands").get(getAllBrands);
productRoute.route("/brand/delete-brand/:id").delete(deleteABrands);

//for category
productRoute.route("/category/create-category").post(createProductCategory);
productRoute.route("/category/get-all-categorys").get(getAllCategory);
productRoute.route("/category/delete-category/:id").delete(deleteACategory);

//for origin
productRoute.route("/origin/create-origin").post(createProductOrigin);
productRoute.route("/origin/get-all-origins").get(getAllOrigin);
productRoute.route("/origin/delete-origin/:id").delete(deleteAOrigin);

//for type
productRoute.route("/type/create-type").post(createProductType);
productRoute.route("/type/get-all-types").get(getAllTypes);
productRoute.route("/type/delete-type/:id").delete(deleteAType);

//for unit
productRoute.route("/unit/create-unit").post(createProductUnit);
productRoute.route("/unit/get-all-units").get(getAllUnit);
productRoute.route("/unit/delete-unit/:id").delete(deleteAnUnit);

//for Products (main part)
productRoute.route("/product/create-product").post(createProduct);
productRoute.route("/product/get-all-product").get(getAllProduct);
productRoute.route("/product/delete-product/:id").delete(deleteProduct);
productRoute.route("/product/update-product/:id").put(updateProduct);

module.exports = productRoute;
