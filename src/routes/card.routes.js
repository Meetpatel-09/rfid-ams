const express = require("express");
const { createCard, getCard } = require("../controllers/card.controller");

const router = express.Router();

router.post("/", createCard);
router.get("/", getCard);

module.exports = router;
