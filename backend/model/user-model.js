const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Role = require("./role-model");

const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isRootAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    RoleId: {
      type: DataTypes.INTEGER,
      references: {
        model: Role,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

// User.hasOne(Role);
Role.hasOne(User);

module.exports = User;
