const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "A transaction must have a amount"],
    },
    type: {
      type: String,
      required: [true, "A transaction must have a type"],
    },
    notes: {
      type: String,
      required: [true, "A transaction must have a note"],
    },
    category: {
      type: String,
      required: [true, "A transaction must have a category"],
    },
    account: {
      type: String,
      required: [true, "A transaction must have an account"],
    },
    title: {
      type: String,
      required: [true, "A transaction must have a title"],
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
