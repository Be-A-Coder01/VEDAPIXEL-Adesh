const events = require("../Models/eventsModel");

const getByCategory = async (req, res, categoryName) => {
  try {
    const items = await events.find({
      category: { $regex: new RegExp(`^${categoryName}$`, "i") },
    });

    if (items.length === 0) {
      return res.status(404).json({
        message: `No ${categoryName} found`,
        status: false,
      });
    }

    res.status(200).json({
      message: `${categoryName} fetched successfully`,
      status: true,
      data: items,
    });
  } catch (error) {
    console.error(`Error fetching ${categoryName}:`, error);
    res.status(500).json({
      message: "Internal Server Error",
      status: false,
    });
  }
};

const getMovies = (req, res) => getByCategory(req, res, "movies");
const getStreams = (req, res) => getByCategory(req, res, "streams");
const getEvents = (req, res) => getByCategory(req, res, "events");
const getPlays = (req, res) => getByCategory(req, res, "play");
const getSports = (req, res) => getByCategory(req, res, "sports");

module.exports = { getMovies, getStreams, getEvents, getPlays, getSports };
