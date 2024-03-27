const Account = require("../models/accounts.models");

exports.getAllAccounts = async (req, res) => {
  try {
    const allAccounts = await Account.find();

    res.status(201).json({
      status: "success",
      numberOfAccounts: allAccounts.length,
      data: {
        accounts: allAccounts,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Request Failed",
      message: err,
    });
  }
};

exports.createAccount = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        account: newAccount,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Request Failed",
      message: err,
    });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    await Account.findByIdAndDelete(req.params.id);
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
