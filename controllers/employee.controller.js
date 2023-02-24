const Employee = require("../models/Employee.model");

const createEmployee = async (req, res) => {
  res.send("create employee");
};

module.exports={createEmployee}
