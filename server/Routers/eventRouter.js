const express = require("express");
const app = express();
const router = express.Router();

const { event } = require("../Controllers/eventController");

router.post("/events", event);

module.exports = router;
