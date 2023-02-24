const Table = require("../models/Table.model");

const createTable = async (req, res) => {
  const {
    month,
    regularEarnings,
    overtimeOne,
    overtimeTwo,
    paye,
    nationalInsurance,
    healthSurcharge,
    other,
  } = req.body;

  try {
    const newTable = await Table.create({
      employee: req.params.id,
      month,
      createdOn:Date.now(),
      regularEarnings,
      overtimeOne,
      overtimeTwo,
      paye,
      nationalInsurance,
      healthSurcharge,
      other,
    });
    if (newTable) {
      res.send(newTable);
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = { createTable };
