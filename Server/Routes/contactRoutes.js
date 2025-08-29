const express = require("express");
const { addMessage } = require("../controllers/contactController");
const router = express.Router();

router.post("/contact", addMessage);

module.exports = router;
