const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const user = require("../Models/userModel");

dotenv.config();

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const register = async (req, res) => {
  console.log("first line");
  try {
    const { name, email, password, number, city } = req.body;
    console.log(name, email);

    let userData = await user.findOne({ email });

    if (userData) {
      return res
        .status(400)
        .json({ message: "User already exists", status: false });
    }
    console.log("test 0 passed");

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    console.log("test 1 passed");
    const userRegistered = await user.create({
      name,
      email,
      password: hash,
      number,
      city,
    });
    console.log("test 2 passed");

    const token = jwt.sign({ email }, process.env.jwtKey, {
      expiresIn: "1h",
    });

    res.status(200).json({
      userRegistered,
      token,
      message: "User Registered Successfully",
      status: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "Not registered, something went wrong, try again",
      status: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFind = await user.findOne({ email });

    if (!userFind) {
      return res.status(400).json({ error: "User not found, please sign up" });
    }

    const checkUser = await bcrypt.compare(password, userFind.password);

    if (!checkUser) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ email, role: userFind.role }, process.env.jwtKey, {
      expiresIn: "1h",
    });

    res.status(200).json({ userFind, token, status: "Login completed" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { register, login };
