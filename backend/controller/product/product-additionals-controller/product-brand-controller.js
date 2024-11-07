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
    const { id } = req.body;
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

module.exports = { createProductBrand, getAllBrands, deleteABrands };
