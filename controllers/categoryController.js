const Category = require("../models/category.model");

exports.getAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.find();

    res.status(201).json({
      status: "success",
      numberOfCategories: allCategories.length,
      data: {
        categories: allCategories,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Request Failed",
      message: err,
    });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        category: newCategory,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Request Failed",
      message: err,
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "Request Failed",
      message: err,
    });
  }
};
