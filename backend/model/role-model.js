const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Role = sequelize.define(
  "Role",
  {
    roleName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
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

module.exports = Role;
