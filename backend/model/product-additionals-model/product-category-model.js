const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const ProductCategory = sequelize.define(
  "ProductCategory",
  {
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parentCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "ProductCategories",
        key: "id",
      },
    },
  },
  {
    timestamps: true,
    tableName: "ProductCategories",
  }
);

ProductCategory.hasMany(ProductCategory, {
  foreignKey: "parentCategoryId",
  as: "subcategories",
});

ProductCategory.belongsTo(ProductCategory, {
  foreignKey: "parentCategoryId",
  as: "parentCategory",
});

module.exports = ProductCategory;
