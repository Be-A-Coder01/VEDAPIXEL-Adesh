const express = require("express");
const app = express();
const router = express.Router();

const { register, login } = require("../Controllers/userController");



router.post("/signup", register);

router.post("/login", login);

module.exports = router;
