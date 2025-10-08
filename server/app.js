const express = require("express");
const app = express();
const PORT = 3000;
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.get("/", (req, res) => {
  res.send("Helo");
});

const userRouter = require("./Routers/userRouter");
const eventRouter = require("./Routers/eventRouter");
const getEvents = require("./Routers/getEventRouter");
const cartRouter = require("./Routers/cartRouter");

app.use("/", userRouter);
app.use("/", eventRouter);
app.use("/", getEvents);
app.use("/", cartRouter);

mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("Connected successfully...");
    app.listen(PORT, () => {
      console.log("Port is listening at 5000");
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
