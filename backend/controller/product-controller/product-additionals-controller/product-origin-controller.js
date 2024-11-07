const ProductOrigin = require("../../../model/product-additionals-model/product-origin-model");

const createProductOrigin = async (req, res) => {
  try {
    const createBrand = await ProductOrigin.create(req.body);

    return res.status(201).json(createBrand);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllOrigin = async (req, res) => {
  try {
    const allBrands = await ProductOrigin.findAll();

    return res.status(201).json(allBrands);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteAOrigin = async (req, res) => {
  try {
    const { id } = req.body;
    await ProductOrigin.destroy({
      where: {
        id: id,
      },
    });

    return res.status(200).json({ message: "Delete Origin Successful" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createProductOrigin, getAllOrigin, deleteAOrigin };
