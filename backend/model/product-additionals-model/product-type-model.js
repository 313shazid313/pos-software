const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const ProductType = sequelize.define(
  "ProductType",
  {
    TypeName: {
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

module.exports = ProductType;
