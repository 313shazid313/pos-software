const ProductUnit = require("../../../model/product-additionals-model/product-unit-model");

const createProductUnit = async (req, res) => {
  try {
    const createBrand = await ProductUnit.create(req.body);

    return res.status(201).json(createBrand);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllUnit = async (req, res) => {
  try {
    const allBrands = await ProductUnit.findAll({
      order: [["id", "ASC"]],
    });

    return res.status(201).json(allBrands);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteAnUnit = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductUnit.destroy({
      where: {
        id: id,
      },
    });

    return res.status(200).json({ message: "Delete Unit Successful" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateUnit = async (req, res) => {
  try {
    const { id } = req.params;

    const { UnitName, description } = req.body;

    const updateData = {
      UnitName,
      description,
    };

    await ProductUnit.update(updateData, { where: { id: id } });

    return res
      .status(201)
      .json({ message: "Unit Update successful", updateData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAsingleUnit = async (req, res) => {
  try {
    const { id } = req.params;
    const anUnit = await ProductUnit.findOne({ where: { id: id } });
    return res.status(200).json({ message: "success", anUnit });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProductUnit,
  getAllUnit,
  deleteAnUnit,
  updateUnit,
  getAsingleUnit,
};
