const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
    },
    emoji: {
      type: String,
      required: [true, "Category emoji is required"],
    },
  },
  {
    timestamp: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
