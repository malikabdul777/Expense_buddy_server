const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // console.log(newUser);

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
