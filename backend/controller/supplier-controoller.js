const Supplier = require("../model/supplier-model");

const createSupplier = async (req, res) => {
  try {
    const { name, mobile, email, address } = req.body;

    const data = {
      name,
      mobile,
      email,
      address,
    };

    const newSupplier = await Supplier.create(data);

    return res
      .status(201)
      .json({ message: "supplier created successfully", newSupplier });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllSupplier = async (req, res) => {
  try {
    const allSupplier = await Supplier.findAll({
      order: [["id", "ASC"]], // Sorting by 'id' in ascending order
    });

    return res.status(200).json({ message: "All suppliers", allSupplier });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const editSupplier = async (req, res) => {
  try {
    const { name, mobile, email, address } = req.body;
    const { id } = req.params;
    const updateData = {
      name,
      mobile,
      email,
      address,
    };

    await Supplier.update(updateData, { where: { id: id } });
    return res
      .status(200)
      .json({ message: "Update Supplier successful", updateData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteSupplier = async (req, res) => {
  try {
    const { id } = req.params;

    await Supplier.destroy({
      where: {
        id: id,
      },
    });

    return res.status(200).json({ message: "Delete Supplier Successful" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSupplier,
  getAllSupplier,
  editSupplier,
  deleteSupplier,
};
