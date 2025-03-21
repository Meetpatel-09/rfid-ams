const express = require("express");
const { login, createAdmin } = require("../controllers/admin.controller");

const router = express.Router();

router.post("/login", login);
router.post("/createAdmin", createAdmin);

module.exports = router;
