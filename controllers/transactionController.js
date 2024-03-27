const Transaction = require("../models/transaction.model");

exports.getAllTransactions = async (req, res) => {
  try {
    const allTransaction = await Transaction.find();
    res.status(201).json({
      status: "success",
      numberOfTransactions: allTransaction.length,
      data: {
        transaction: allTransaction,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Request Failed",
      message: err,
    });
  }
};

exports.getTransaction = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This Route is not yet defined!",
  });
};

exports.createTransaction = async (req, res) => {
  try {
    const newTransaction = await Transaction.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        transaction: newTransaction,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Request Failed",
      message: err,
    });
  }
};

exports.patchTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "success",
      data: {
        transaction,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Request Failed",
      message: err,
    });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
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
