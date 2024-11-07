const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const ProductBrand = sequelize.define(
  "ProductBrand",
  {
    brandName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull:true
    },
   
  },
  {
    timestamps: true,
  }
);

module.exports = ProductBrand;
