const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableSchema = new Schema({
  employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  month: {
    type: String,
  },
  createdOn: {
    type: Date,
  },
  regularEarnings: {
    type: Number,
  },
  overtimeOne: {
    type: Number,
  },
  overtimeTwo: {
    type: Number,
  },
  paye: {
    type: Number,
  },
  nationalInsurance: {
    type: Number,
  },
  healthSurcharge: {
    type: Number,
  },
  other: {
    type: Number,
  },
});

const Table = mongoose.model("Table", tableSchema);
module.exports = Table;
