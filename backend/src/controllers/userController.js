const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");


exports.signup = async (request, response) => {
  try {
    const user = await User.findOne({ email: request.body.email });
    if (user) {
      return response.status(400).json({
        error: "User already registered",
      });
    }
    const { username, email, password } = request.body;
    const _user = new User({
      username,
      email,
      password,
    });
    const data = await _user.save();
    return response.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    return response.status(400).json({
      error: "Something went wrong",
    });
  }
};

exports.signin = async (request, response) => {
  try {
    const user = await User.findOne({ email: request.body.email });
    if (user) {
      if (user.authenticate(request.body.password)) {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        const { _id, username, email } = user;
        response.status(200).json({
          token,
          user: { _id, username, email },
        });
      } else {
        return response.status(400).json({
          message: "Invalid Password",
        });
      }
    } else {
      return response.status(400).json({ message: "Something went wrong" });
    }
  } catch (error) {
    return response.status(400).json({ error });
  }
};

exports.requireSignin = (request, response, next) => {
  const token = request.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.JWT_SECRET);
  request.user = user;
  next();
};
