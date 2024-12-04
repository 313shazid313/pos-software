const Customer = require("../model/customer-model");

const createCustomer = async (req, res) => {
  try {
    const { name, mobile, email, address } = req.body;

    const data = {
      name,
      mobile,
      email,
      address,
    };

    const newCustomer = await Customer.create(data);

    return res
      .status(201)
      .json({ message: "Customer created successfully", newCustomer });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllCustomer = async (req, res) => {
  try {
    const allCustomer = await Customer.findAll({
      order: [["id", "ASC"]], // Sorting by 'id' in ascending order
    });

    return res.status(200).json({ message: "All Customers", allCustomer });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getASingleCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const aCustomer = await Customer.findOne({
      where: {
        id: id,
      },
    });
    return res.status(200).json({ message: "a Customers", aCustomer });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const editCustomer = async (req, res) => {
  try {
    const { name, mobile, email, address } = req.body;
    const { id } = req.params;
    const updateData = {
      name,
      mobile,
      email,
      address,
    };

    await Customer.update(updateData, { where: { id: id } });
    return res
      .status(200)
      .json({ message: "Update Customer successful", updateData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;

    await Customer.destroy({
      where: {
        id: id,
      },
    });

    return res.status(200).json({ message: "Delete Customer Successful" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCustomer,
  getAllCustomer,
  editCustomer,
  deleteCustomer,
  getASingleCustomer,
};
