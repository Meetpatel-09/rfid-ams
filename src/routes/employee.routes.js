const express = require("express");
const {
    createEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
} = require("../controllers/employee.controller");

const router = express.Router();
const protected = require("../middlewares/auth.middleware");
const upload = require("../middlewares/upload.middleware");

router.post("/", protected, upload.single("profile"), createEmployee);
router.get("/", protected, getEmployees);
router.get("/:id", protected, getEmployeeById);
router.patch("/:id", protected, upload.single("profile"), updateEmployee);
router.delete("/:id", protected, deleteEmployee);

module.exports = router;
