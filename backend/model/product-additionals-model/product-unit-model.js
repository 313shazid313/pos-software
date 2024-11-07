const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const ProductUnit = sequelize.define(
  "ProductUnit",
  {
    UnitName: {
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

module.exports = ProductUnit;
