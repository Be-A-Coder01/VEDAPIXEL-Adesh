const express = require("express");
const app = express();
const router = express.Router();

const { addToCart } = require("../Controllers/cartController");

router.post("/cart", addToCart);
module.exports = router;
