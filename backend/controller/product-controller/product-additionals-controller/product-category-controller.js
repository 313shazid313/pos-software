const ProductCategory = require("../../../model/product-additionals-model/product-category-model");

const createProductCategory = async (req, res) => {
  try {
    const { categoryName, parentCategoryId } = req.body;

    var insObj = {
      categoryName,
    };

    if (parentCategoryId) {
      insObj.parentCategoryId = parentCategoryId;
    }
    const createCategory = await ProductCategory.create(insObj);

    return res.status(201).json(createCategory);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllCategory = async (req, res) => {
  try {
    const allCategories = await ProductCategory.findAll({
      order: [["id", "ASC"]],
    });

    if (!allCategories) {
      return res.status(201).json({ message: "Categories does not exist" });
    }

    const nestedCates = nestedCategories(allCategories);

    return res.status(201).json(nestedCates);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const nestedCategories = (categories, parentd = null) => {
  const categoryList = [];
  let category;

  if (parentd == null) {
    category = categories.filter((cat) => cat.parentCategoryId == null);
  } else {
    category = categories.filter(
      (cat) => String(cat.parentCategoryId) == String(parentd)
    );
  }

  for (let cate of category) {
    categoryList.push({
      id: cate.id,
      categoryName: cate.categoryName,
      parentCategoryId: cate.parentCategoryId,
      children: nestedCategories(categories, cate.id),
    });
  }
  return categoryList;
};

const deleteACategory = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductCategory.destroy({
      where: {
        id: id,
      },
    });

    return res.status(200).json({ message: "Delete Category Successful" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const { categoryName, description } = req.body;

    const updateData = {
      categoryName,
      description,
    };

    await ProductCategory.update(updateData, { where: { id: id } });

    return res
      .status(201)
      .json({ message: "Category Update successful", updateData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAsingleCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const aCategory = await ProductCategory.findOne({ where: { id: id } });
    return res.status(200).json({ message: "success", aCategory });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProductCategory,
  getAllCategory,
  deleteACategory,
  updateCategory,
  getAsingleCategory,
};
