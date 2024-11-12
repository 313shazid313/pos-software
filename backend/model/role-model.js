// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/database");

// const Role = sequelize.define(
//   "Role",
//   {
//     roleName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     status: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: true,
//     },
//     CanAddData: {
//       type: DataTypes.BOOLEAN,
//       allowNull: true,
//     },
//     CanEditData: {
//       type: DataTypes.BOOLEAN,
//       allowNull: true,
//     },
//     CanReadData: {
//       type: DataTypes.BOOLEAN,
//       allowNull: true,
//     },
//     CanDeleteData: {
//       type: DataTypes.BOOLEAN,
//       allowNull: true,
//     },
//   },
//   {
//     timestamps: false,
//   }
// );

// module.exports = Role;

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// const ProductRolePermission = sequelize.define(
//   "ProductRolePermission",
//   {
//     CanAddData: {
//       type: DataTypes.BOOLEAN,
//       allowNull: true,
//     },
//     CanEditData: {
//       type: DataTypes.BOOLEAN,
//       allowNull: true,
//     },
//     CanReadData: {
//       type: DataTypes.BOOLEAN,
//       allowNull: true,
//     },
//     CanDeleteData: {
//       type: DataTypes.BOOLEAN,
//       allowNull: true,
//     },
//   },
//   {
//     timestamps: false,
//   }
// );
const ProductRolePermission = require("./role-models/product-role-permission-model")

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
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ProductRolePermissionId: {
      type: DataTypes.INTEGER,
      references: {
        model: ProductRolePermission,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

ProductRolePermission.hasOne(Role);

module.exports = Role;
// module.exports = ProductRolePermission;
