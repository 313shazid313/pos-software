const ProductCategory = require("../../../model/product-additionals-model/product-category-model");

const createProductCategory = async (req, res) => {
  try {
    const createBrand = await ProductCategory.create(req.body);

    return res.status(201).json(createBrand);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllCategory = async (req, res) => {
  try {
    const allBrands = await ProductCategory.findAll({
      order: [["id", "ASC"]], 
    });

    return res.status(201).json(allBrands);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
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
