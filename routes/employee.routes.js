const express = require("express");
const router = express.Router();
const {
  createEmployee,
  deleteEmployee,
} = require("../controllers/employee.controller");
const { isAuthenticated } = require("../middleware/jwt.middleware");

router.post("/create-employee", isAuthenticated, createEmployee);
router.delete("/delete-employee/:id", isAuthenticated, deleteEmployee);

module.exports = router;
