const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const ProductRolePermission = sequelize.define(
  "ProductRolePermission",
  {
    CanAddData: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    CanEditData: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    CanReadData: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    CanDeleteData: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ProductRolePermission