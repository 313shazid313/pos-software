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
      type: DataTypes.TEXT,
      allowNull: true,
    },
    specification: {
      type: DataTypes.TEXT,
    },
    imageurl: {
      type: DataTypes.STRING,
      allowNull: true,
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
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    sellType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ProductCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: ProductCategory,
        key: "id",
      },
    },
    ProductOriginId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: ProductOrigin,
        key: "id",
      },
    },
    ProductBrandId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: ProductBrand,
        key: "id",
      },
    },
    ProductTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: ProductType,
        key: "id",
      },
    },

    ProductUnitId: {
      type: DataTypes.INTEGER,
      allowNull: true,
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

Products.belongsTo(ProductCategory, { foreignKey: 'ProductCategoryId' });
Products.belongsTo(ProductOrigin, { foreignKey: 'ProductOriginId' });
Products.belongsTo(ProductBrand, { foreignKey: 'ProductBrandId' });
Products.belongsTo(ProductType, { foreignKey: 'ProductTypeId' });
Products.belongsTo(ProductUnit, { foreignKey: 'ProductUnitId' });



module.exports = Products;
