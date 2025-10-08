const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: "String",
    required: true,
  },

  price: {
    type: "Number",
    required: true,
  },
  movieLevel: {
    type: "String",
  },

  productImage: {
    type: "Mixed",
  },

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],

  booked: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],

  category: {
    type: "String",
  },
  description: {
    type: "String",
  },
  location: {
    type: "String",
  },
  nature: [
    {
      type: "String",
    },
  ],
  language: {
    type: "String",
  },
  createdAt: {
    type: "Date",
    default: Date.now,
  },
});

const eventModel = mongoose.model("events", eventSchema);

module.exports = eventModel;
