const router = require("express").Router();
let User = require("../models/user.model");

//@route GET api/auth
//@desc Get logged in user
//@access private
router.route("/").get((req, res) => {
  res.send("get logged in user");
});



//@route POST api/auth
//@desc Auth User and get Token
//@access public
router.route("/").post((req, res) => {
  res.send("Login user");
});

module.exports = router;
