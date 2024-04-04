const User = require("../models/user.model");
exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();

    res.status(201).json({
      status: "success",
      numberOfUsers: allUsers.length,
      data: {
        users: allUsers,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Request Failed",
      message: err,
    });
  }
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This Route is not yet defined!",
  });
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Request Failed",
      message: err,
    });
  }
};

exports.patchUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Request Failed",
      message: err,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
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
