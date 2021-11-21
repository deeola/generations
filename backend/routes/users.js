const router = require("express").Router();
let User = require("../models/user.model");




router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

//POST

router.route("/").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const password2 = req.body.password2;

  const newUser = new User({
    username,
    email,
    password,
    password2,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));


//  res.send('register a user')

});



module.exports = router;
