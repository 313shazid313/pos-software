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
    const { id } = req.params;
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

const updateOrigin = async (req, res) => {
  try {
    const { id } = req.params;

    const { originName, description } = req.body;

    const updateData = {
      originName,
      description,
    };

    await ProductOrigin.update(updateData, { where: { id: id } });

    return res
      .status(201)
      .json({ message: "Origin Update successful", updateData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAsingleOrigin = async (req, res) => {
  try {
    const { id } = req.params;
    const anOrigin = await ProductOrigin.findOne({ where: { id: id } });
    return res.status(200).json({ message: "success", anOrigin });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProductOrigin,
  getAllOrigin,
  updateOrigin,
  deleteAOrigin,
  getAsingleOrigin,
};
