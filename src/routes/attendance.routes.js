const express = require("express");
const {
    putAttendance,
    getAttendance,
} = require("../controllers/attendance.controller");

const router = express.Router();

router.put("/:id", putAttendance);
router.get("/", getAttendance);

module.exports = router;
