const express = require("express");
const productRoute = express.Router();

const {
  createProductBrand,
  getAllBrands,
  deleteABrands,
  updateBrand,
  getAsingleBrand,
} = require("../controller/product-controller/product-additionals-controller/product-brand-controller");

const {
  createProductCategory,
  getAllCategory,
  deleteACategory,
  updateCategory,
  getAsingleCategory,
} = require("../controller/product-controller/product-additionals-controller/product-category-controller");

const {
  createProductOrigin,
  getAllOrigin,
  deleteAOrigin,
  updateOrigin,
  getAsingleOrigin,
} = require("../controller/product-controller/product-additionals-controller/product-origin-controller");

const {
  createProductType,
  getAllTypes,
  deleteAType,
  updateType,
  getAsingleType,
} = require("../controller/product-controller/product-additionals-controller/product-type-controller");

const {
  createProductUnit,
  getAllUnit,
  deleteAnUnit,
  updateUnit,
  getAsingleUnit,
} = require("../controller/product-controller/product-additionals-controller/product-unit-controller");

const {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  getaSingleProduct,
  searchProducts
} = require("../controller/product-controller/product-controller");

//for brand
productRoute.route("/brand/create-brand").post(createProductBrand);
productRoute.route("/brand/get-all-brands").get(getAllBrands);
productRoute.route("/brand/delete-brand/:id").delete(deleteABrands);
productRoute.route("/brand/update-brand/:id").put(updateBrand);
productRoute.route("/brand/single-brand/:id").get(getAsingleBrand);

//for category
productRoute.route("/category/create-category").post(createProductCategory);
productRoute.route("/category/get-all-categorys").get(getAllCategory);
productRoute.route("/category/delete-category/:id").delete(deleteACategory);
productRoute.route("/category/update-category/:id").put(updateCategory);
productRoute.route("/category/single-category/:id").get(getAsingleCategory);

//for origin
productRoute.route("/origin/create-origin").post(createProductOrigin);
productRoute.route("/origin/get-all-origins").get(getAllOrigin);
productRoute.route("/origin/delete-origin/:id").delete(deleteAOrigin);
productRoute.route("/origin/update-origin/:id").put(updateOrigin);
productRoute.route("/origin/single-origin/:id").get(getAsingleOrigin);

//for type
productRoute.route("/type/create-type").post(createProductType);
productRoute.route("/type/get-all-types").get(getAllTypes);
productRoute.route("/type/delete-type/:id").delete(deleteAType);
productRoute.route("/type/update-type/:id").put(updateType);
productRoute.route("/type/single-type/:id").get(getAsingleType);

//for unit
productRoute.route("/unit/create-unit").post(createProductUnit);
productRoute.route("/unit/get-all-units").get(getAllUnit);
productRoute.route("/unit/delete-unit/:id").delete(deleteAnUnit);
productRoute.route("/unit/update-unit/:id").put(updateUnit);
productRoute.route("/unit/single-unit/:id").get(getAsingleUnit);

//for Products (main part)
productRoute.route("/product/create-product").post(createProduct);
productRoute.route("/product/get-all-product").get(getAllProduct);
productRoute.route("/product/delete-product/:id").delete(deleteProduct);
productRoute.route("/product/update-product/:id").put(updateProduct);
productRoute.route("/product/single-product/:id").get(getaSingleProduct);
productRoute.route("/product/search").get(searchProducts);
module.exports = productRoute;
