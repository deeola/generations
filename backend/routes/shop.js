const router = require("express").Router();
let User = require("../models/user.model");

//@route GET api/shopfiles
//@desc Get all users shopfiles
//@access private

router.route("/").get((req, res) => {
  res.send("get all shopfiles");
});



//@route POST api/auth
//@desc Auth User and get Token
//@access public
router.route("/").post((req, res) => {
  res.send("add new shopfiles");
});



//@route POST api/auth
//@desc Auth User and get Token
//@access public
router.route("/").post((req, res) => {
    res.send("add shopfile");
});


//@route Put api/shopfiles/:id
//@desc Update Shopfile
//@access private
router.route("/:id").put((req, res) => {
    res.send("update shopfile");
});

//@route DELETE api/shopfiles/:id
//@desc DELETE shopfile
//@access private
router.route("/:id").delete((req, res) => {
    res.send("delete shopfile");
});
  
  

module.exports = router;
