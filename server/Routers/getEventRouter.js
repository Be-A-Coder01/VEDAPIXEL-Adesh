const express = require("express");
const router = express.Router();
const {
  getMovies,
  getStreams,
  getEvents,
  getPlays,
  getSports,
} = require("../Controllers/getEventControllers");

router.get("/movies", getMovies);
router.get("/streams", getStreams);
router.get("/events", getEvents);
router.get("/play", getPlays);
router.get("/sports", getSports);

module.exports = router;
