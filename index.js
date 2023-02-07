const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//setup express app
const app = express();

//connect to mongodb
mongoose.connect("mongodb://127.0.0.1/usersDB");
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

//error handling middleware
app.use(function(err, req, res, next){
  // console.log(err);
  res.status(422).send({error: err.message})
})

//initializing routes
app.use("/api", require("./routes/api"));

//listening for requests
app.listen(process.env.port || 4000, function () {
  console.log("now listening for requests");
});
