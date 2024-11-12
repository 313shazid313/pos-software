const Role = require("../model/role-model");
const ProductRolePermission = require("../model/role-models/product-role-permission-model");
const createRole = async (req, res) => {
  try {
    const {
      roleName,
      status,
      description,
      CanAddData,
      CanEditData,
      CanReadData,
      CanDeleteData,
    } = req.body;

    const productPermissions = await ProductRolePermission.create({
      CanAddData,
      CanEditData,
      CanReadData,
      CanDeleteData,
    });

    const roles = await Role.create({
      roleName,
      status,
      description,
      ProductRolePermissionId: productPermissions.id,
    });

    // console.log(req.body);
    return res.status(201).json({ roles, productPermissions });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllRole = async (req, res) => {
  try {
    const allRole = await Role.findAll();
    const allPermissions = await ProductRolePermission.findAll();

    return res.status(200).json({
      message: "Getting all role and permissions",
      allRole,
      allPermissions,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateRole = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      roleName,
      description,
      CanAddData,
      CanEditData,
      CanReadData,
      CanDeleteData,
      status,
    } = req.body;

    // console.log(req.body);

    const updateRoleData = {
      roleName,
      description,
      status,
    };

    const updateProductPermissionData = {
      CanAddData,
      CanEditData,
      CanReadData,
      CanDeleteData,
    };

    await Role.update(updateRoleData, { where: { id: id } });
    await ProductRolePermission.update(updateProductPermissionData, {
      where: { id: id },
    });

    return res
      .status(200)
      .json({
        message: "Update Role successful",
        updateRoleData,
        updateProductPermissionData,
      });
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

    await ProductRolePermission.destroy({
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
