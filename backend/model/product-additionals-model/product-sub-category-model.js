const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const ProductCategory = require("../product-additionals-model/product-category-model");

const ProductSubCategory = sequelize.define(
  "ProductSubCategory",
  {
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ProductCategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: ProductCategory,
        key: "id",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = ProductSubCategory;
