const Role = require("../model/role-model");

const createRole = async (req, res) => {
  try {
    const roles = await Role.create(req.body);

    return res.status(201).json(roles);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllRole = async (req, res) => {
  try {
    const allRole = await Role.findAll();

    return res.status(200).json({ message: "Getting all role", allRole });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateRole = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      roleName,
      CanAddData,
      CanEditData,
      CanReadData,
      CanDeleteData,
      status,
    } = req.body;

    console.log(req.body);

    const updateData = {
      roleName,
      CanAddData,
      CanEditData,
      CanReadData,
      CanDeleteData,
      status,
    };

    await Role.update(updateData, { where: { id: id } });
    return res
      .status(200)
      .json({ message: "Update Role successful", updateData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;

    await Role.destroy({
      where: {
        id: id,
      },
    });

    return res.status(200).json({ message: "Delete Role Successful" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createRole, getAllRole, updateRole, deleteRole };
