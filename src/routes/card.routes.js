const express = require("express");
const { createCard, getCard } = require("../controllers/card.controller");

const router = express.Router();

router.get("/:id", createCard);
router.get("/", getCard);

module.exports = router;
