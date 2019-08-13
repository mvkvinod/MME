const router = require("express").Router();

router.get("/ownerLogin", (req, res) => {
  res.send("this is owner login page");
});

router.get("/adminLogin", (req, res) => {
  res.send("this is admin login page");
});

module.exports = router;
