require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth.routes");
const employeeRouter = require("./routes/employee.routes");
const tableRouter=require('./routes/table.routes')

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/auth", authRouter);
app.use("/employee", employeeRouter);
app.use('/table',tableRouter)

app.get("/", (req, res) => {
  res.send("balance server up");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then((connectRes) => {
    console.log("//////////////////// PINTREST-CLONE //////////////////////");
    console.log("connected to -->", connectRes.connections[0].name);
    app.listen(PORT, () => {
      console.log("Balance backend up on-->", +PORT);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
