const express = require("express");
const events = require("../Models/eventsModel");

const app = express();
app.use(express.json());

const event = async (req, res) => {
  try {
    let {
      title,
      price,
      movieLevel,
      productImage,
      category,
      description,
      location,
      nature,
      language,
    } = req.body;

    if (!title || !price || !productImage) {
      return res
        .status(403)
        .send({ message: "Fields are required", status: false });
    }

    if (nature && typeof nature === "string") {
      nature = nature.split(",").map((item) => item.trim());
    }

    const createEvent = await events.create({
      title,
      price,
      movieLevel,
      productImage,
      category,
      description,
      location,
      nature,
      language,
    });

    res.status(200).json({
      message: "Uploaded successfully",
      status: true,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "Not uploaded, something went wrong, try again",
      status: false,
    });
  }
};

module.exports = { event };
