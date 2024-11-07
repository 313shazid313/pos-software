const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Products = sequelize.define(
  "Products",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: true,
    },
    specification: {
      type: DataTypes.STRING,
      defaultValue: true,
    },
    imageurl :{
      type: DataTypes.STRING,
    },
    Category: {

    },

  },
  {
    timestamps: true,
  }
);

module.exports = Products;
