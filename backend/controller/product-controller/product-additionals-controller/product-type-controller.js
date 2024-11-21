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
    const { id } = req.params;
    await ProductType.destroy({
      where: {
        id: id,
      },
    });

    return res.status(200).json({ message: "Delete Type Successful" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateType = async (req, res) => {
  try {
    const { id } = req.params;

    const { TypeName, description } = req.body;

    const updateData = {
      TypeName,
      description,
    };

    await ProductType.update(updateData, { where: { id: id } });

    return res
      .status(201)
      .json({ message: "Type Update successful", updateData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAsingleType = async (req, res) => {
  try {
    const { id } = req.params;
    const aType = await ProductType.findOne({ where: { id: id } });
    return res.status(200).json({ message: "success", aType });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProductType,
  getAllTypes,
  deleteAType,
  updateType,
  getAsingleType,
};
