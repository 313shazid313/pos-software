const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ProductBrand = require("./product-additionals-model/product-brand-model");
const ProductCategory = require("./product-additionals-model/product-category-model");
const ProductOrigin = require("./product-additionals-model/product-origin-model");
const ProductType = require("./product-additionals-model/product-type-model");
const ProductUnit = require("./product-additionals-model/product-unit-model");

const Products = sequelize.define(
  "Products",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specification: {
      type: DataTypes.STRING,
    },
    imageurl: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mrpPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expiryDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    sellType: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    vat: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ProductCategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: ProductCategory,
        key: "id",
      },
    },
    ProductOriginId: {
      type: DataTypes.INTEGER,
      references: {
        model: ProductOrigin,
        key: "id",
      },
    },
    ProductBrandId: {
      type: DataTypes.INTEGER,
      references: {
        model: ProductBrand,
        key: "id",
      },
    },
    ProductTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: ProductType,
        key: "id",
      },
    },
    ProductUnitId: {
      type: DataTypes.INTEGER,
      references: {
        model: ProductUnit,
        key: "id",
      },
    },
  },
  {
    timestamps: true,
  }
);

ProductBrand.hasOne(Products);
ProductCategory.hasOne(Products);
ProductOrigin.hasOne(Products);
ProductType.hasOne(Products);
ProductUnit.hasOne(Products);

module.exports = Products;
