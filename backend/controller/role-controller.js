const Role = require("../model/role-model");

const createRole = async (req, res) => {
  try {
    const roles = await Role.create(req.body);
    res.status(201).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createRole };
