const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    email: {
      type: "String",
      required: true,
    },
    password: {
      type: "String",
      required: true,
    },
    number: {
      type: "Number",
      required: true,
    },
    city: {
      type: "String",
    },
    like: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "events",
      },
    ],
    bookings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "events",
      },
    ],
    role: {
      type: "String",
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
