const express = require("express");
const router = express.Router();
const { createEmployee } = require("../controllers/employee.controller");
const { isAuthenticated } = require("../middleware/jwt.middleware");

router.post("/create-employee", isAuthenticated, createEmployee);

module.exports = router;
