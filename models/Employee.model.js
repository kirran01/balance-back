const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  phone:{
    type:Number,
    unique:true,
  },
  image:{
    type:String
  }
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
