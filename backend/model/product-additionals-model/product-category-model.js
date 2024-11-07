const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const ProductCategory = sequelize.define(
  "ProductCategory",
  {
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
   
  },
  {
    timestamps: true,
  }
);

module.exports = ProductCategory;
