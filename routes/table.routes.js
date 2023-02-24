const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middleware/jwt.middleware");
const { createTable } = require("../controllers/table.controller");
const { create } = require("../models/User.model");

router.post("/create-table/:id", isAuthenticated, createTable);

module.exports = router;
