const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: false })); //These two lines allow us to parse the body of an HTTP request and parse a JSON payload
app.use(express.json());
const formidable = require("formidable");
const mongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const mongoUrl = "mongodb://localhost:27017";

global.db = "";
mongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, res) => {
  if (err) {
    console.log("database error");
    return;
  }
  db = res.db("company");
  console.log("mongoDB listening");
});

// ########################### ROUTES ###################### //
const postRout = require("./routes/createPost2");
app.use(postRout);
//########## SEARCH FOR USERS
app.get("/users", (req, res) => {
  // Getting the request from the frontend
  let searchFor = req.query.searchFor;
  console.log("req.query:", req.query.searchFor);

  //  REGEX for the input from the frontend
  var regexName = new RegExp(searchFor, "i"); // A, a incasesentive

  db.collection("users")
    .find({ name: regexName })
    .toArray((err, response) => {
      if (err) {
        console.log("Can not read");
        return;
      }
      console.log("resp", response);
      res.send(response);
    });

  //  Solving cors issue Let the system differnet ports talk to eachother
  res.header("Access-Control-Allow-Origin", "*");
});

//########## SIGN UP
let userRoutes = require("./routes/user");
app.use(userRoutes);
//########## CREATING A POST
let createPost = require("./routes/createPost");
app.use(createPost);

app.listen(80, (err) => {
  if (err) {
    console.log("Server can not listen ");
    return;
  }
  console.log("Server listening to port 80 ....");
});

// CHECK IF ERROR,SO NOT CRASHING
process.on("uncaughtException", (err, data) => {
  // If i have an error
  if (err) {
    console.log("Critical error, yet system keeps running");
  }
  return;
});
