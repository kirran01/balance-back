const Employee = require("../models/Employee.model");

const createEmployee = async (req, res) => {
  const { firstName, lastName, email, phone, image } = req.body;
  try {
    const newEmployee = await Employee.create({
      firstName,
      lastName,
      email,
      phone,
      image,
    });
    if (newEmployee) {
      res.send(newEmployee);
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = { createEmployee };
