const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
app.use(fileUpload());
const port = process.env.PORT || 5500;

app.use(cors());
app.use(express.json({}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//require
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const showcaseRouter = require("./routes/showcase");

//use
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/showcase", showcaseRouter);



//upload endpoint
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "no file uploaded" });
  }

  const file = req.files.file;



  file.mv(`${__dirname}/public/uploads/${file.name}`, (err) => {

  
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});




