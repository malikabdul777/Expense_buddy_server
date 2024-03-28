const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Account name is required"],
      unique: [true, "Account already exists"],
    },
  },
  {
    timestamp: true,
  }
);

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
