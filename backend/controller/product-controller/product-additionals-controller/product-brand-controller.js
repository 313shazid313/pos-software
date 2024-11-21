const ProductBrand = require("../../../model/product-additionals-model/product-brand-model");

const createProductBrand = async (req, res) => {
  try {
    const createBrand = await ProductBrand.create(req.body);

    return res.status(201).json(createBrand);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllBrands = async (req, res) => {
  try {
    const allBrands = await ProductBrand.findAll();

    return res.status(201).json(allBrands);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteABrands = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductBrand.destroy({
      where: {
        id: id,
      },
    });

    return res.status(200).json({ message: "Delete Brand Successful" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateBrand = async (req, res) => {
  try {
    const { id } = req.params;

    const { brandName, description } = req.body;

    const updateData = {
      brandName,
      description,
    };

    await ProductBrand.update(updateData, { where: { id: id } });

    return res
      .status(201)
      .json({ message: "Brand Update successful", updateData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAsingleBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const aBrand = await ProductBrand.findOne({ where: { id: id } });
    return res.status(200).json({ message: "success", aBrand });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProductBrand,
  getAllBrands,
  deleteABrands,
  updateBrand,
  getAsingleBrand
};
