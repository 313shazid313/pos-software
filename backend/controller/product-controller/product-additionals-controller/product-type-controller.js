const ProductType = require("../../../model/product-additionals-model/product-type-model");

const createProductType = async (req, res) => {
  try {
    const createBrand = await ProductType.create(req.body);

    return res.status(201).json(createBrand);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllTypes = async (req, res) => {
  try {
    const allBrands = await ProductType.findAll();

    return res.status(201).json(allBrands);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteAType = async (req, res) => {
  try {
    const { id } = req.body;
    await ProductType.destroy({
      where: {
        id: id,
      },
    });

    return res.status(200).json({ message: "Delete Origin Successful" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createProductType, getAllTypes, deleteAType };
