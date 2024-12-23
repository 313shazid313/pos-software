const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const ProductCategory = sequelize.define(
  "ProductCategory",
  {
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
 
  },
  {
    timestamps: true,
  }
);

module.exports = ProductCategory;
