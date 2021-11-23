const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
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

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
