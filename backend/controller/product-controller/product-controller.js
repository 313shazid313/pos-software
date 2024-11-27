const Products = require("../../model/product-model");

const ProductBrand = require("../../model/product-additionals-model/product-brand-model");
const ProductCategory = require("../../model/product-additionals-model/product-category-model");
const ProductOrigin = require("../../model/product-additionals-model/product-origin-model");
const ProductType = require("../../model/product-additionals-model/product-type-model");
const ProductUnit = require("../../model/product-additionals-model/product-unit-model");

const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      specification,
      imageurl,
      price,
      mrpPrice,
      ProductCategoryId,
      ProductOriginId,
      ProductBrandId,
      ProductTypeId,
      ProductUnitId,
      expiryDate,
      sellType,
      vat,
      quantity,
    } = req.body;

    const createAProduct = await Products.create({
      name,
      description,
      specification,
      imageurl,
      price,
      mrpPrice,
      ProductCategoryId,
      ProductOriginId,
      ProductBrandId,
      ProductTypeId,
      ProductUnitId,
      expiryDate,
      sellType,
      vat,
      quantity,
    });

    return res
      .status(201)
      .json({ message: "Product created succesfully", createAProduct });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const nunberOfContent = 5;
    const page = parseInt(req.query.page || "0");
    const totalAmountInDatabase = await Products.count();

    const allProducts = await Products.findAll(
      {
        include: [
          { model: ProductCategory, as: "ProductCategory" },
          { model: ProductOrigin, as: "ProductOrigin" },
          { model: ProductBrand, as: "ProductBrand" },
          { model: ProductType, as: "ProductType" },
          { model: ProductUnit, as: "ProductUnit" },
        ],
      },
      //for pagination
      {
        order: [["id", "ASC"]], // Sorting by 'id' in ascending order
      },
      { limit: nunberOfContent, offset: nunberOfContent * page }
      //for pagination
    );

    return res.status(200).json({
      allProducts,
      totalPage: Math.ceil(totalAmountInDatabase / nunberOfContent),
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getaSingleProduct = async (req, res) => {
  try {
    // Extract the id from request parameters
    const { id } = req.params;

    // Fetch the product using Sequelize's findOne method
    const singleProduct = await Products.findOne({
      where: { id: id },
      include: [
        { model: ProductCategory, as: "ProductCategory" },
        { model: ProductOrigin, as: "ProductOrigin" },
        { model: ProductBrand, as: "ProductBrand" },
        { model: ProductType, as: "ProductType" },
        { model: ProductUnit, as: "ProductUnit" },
      ],
    });

    // Check if the product exists
    if (!singleProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Respond with the product data
    res.status(200).json({ singleProduct });
  } catch (error) {
    // Handle errors
    return res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      specification,
      imageurl,
      price,
      mrpPrice,
      ProductCategoryId,
      ProductOriginId,
      ProductBrandId,
      ProductTypeId,
      ProductUnitId,
      expiryDate,
      sellType,
      vat,
      quantity,
    } = req.body;

    const updateData = {
      name,
      description,
      specification,
      imageurl,
      price,
      mrpPrice,
      ProductCategoryId,
      ProductOriginId,
      ProductBrandId,
      ProductTypeId,
      ProductUnitId,
      expiryDate,
      sellType,
      vat,
      quantity,
    };

    await Products.update(updateData, { where: { id: id } });

    return res
      .status(201)
      .json({ message: "Product Update successful", updateData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Products.destroy({
      where: {
        id: id,
      },
    });

    return res.status(201).json({ message: "Delete Origin Successful" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  getaSingleProduct,
};
