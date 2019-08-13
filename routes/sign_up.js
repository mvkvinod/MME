const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();
const db = require("../config/DB");
const mod = require("../models/Sign_Up_model");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

//to add a new owner to the data base
router.post("/ownerSignUp", (req, res) => {
  mod
    .create({
      ownerName: req.body.ownerName,
      pharmaName: req.body.pharmaName,
      licenseNo: req.body.licenseNo,
      address: req.body.address,
      state: req.body.state,
      country: req.body.country,
      pinCode: Number(req.body.pinCode),
      email: req.body.email,
      mobileNo: Number(req.body.mobileNo),
      password: req.body.password
    })
    .then(resp => {
      console.log("owners auto-generated ID:", resp.id),
        res.send("owner registered");
    })
    .catch(err => console.log(err));
});

/*  //to fetch the list of signed up owners
router.get("/ownerList", (req, res) => {
  // use this findAll() method to fetch the data from the data base
  mod
    .findAll()
    .then(sucs => {
      console.log(sucs);
      res.sendStatus(200);
    })
    .catch(err => console.log(err));
  // mod
  //   .findOne({
  //     where: {
  //       licenseNo: "123456"
  //     }
  //     // attributes: ["id", "ownerName", "pharmaName", "mobileNo"]
  //   })
  //   .then(entries => {
  //     console.log(entries);
  //   });
});
*/
module.exports = router;
