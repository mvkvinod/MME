const express = require("express");
const expObj = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

//Initial route 
expObj.get("/", (req, res) => {
  res.send("Success");
});

//  DB Connection
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true
  },
  () => console.log("Connected to DB!!!")
);

expObj.use(express.json());

// PORT 
expObj.listen(1313, () => console.log("server running on PORT:1313 "));
