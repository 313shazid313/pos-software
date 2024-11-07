const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const ProductOrigin = sequelize.define(
  "ProductOrigin",
  {
    originName: {
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

module.exports = ProductOrigin;
