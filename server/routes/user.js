const router = require("express").Router();
const formidable = require("formidable");
const path = require("path");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const ObjectID = require("mongodb").ObjectID;

/************** SIGN UP *************'*/
router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "signup.html"));
});
router.post("/signup", (req, res) => {
  try {
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
      let username = fields.username;
      let password = fields.password;
      console.log(username);
      db.collection("users").insertOne(
        { name: username, password: password },
        (err, jMongoResponse) => {
          console.log(jMongoResponse);
          res.send(
            `${username} ${password} user id: ${jMongoResponse.insertedId}`
          );
        }
      );
    });
  } catch (err) {
    console.log("error");
  }
});

/************** LOGIN **************/

router.get("/login", (req, res) => {
  //res.sendFile(__dirname+"/views/signup.html")
  res.sendFile(path.join(__dirname, "views", "login.html"));
});
router.post("/login", (req, res) => {
  try {
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
      let username = fields.username;
      let password = fields.password;
      console.log(username);
      db.collection("users").findOne({ name: username }, (err, dbResult) => {
        if (!dbResult) {
          res.status(404).send("Wrong credentials");
        }
        var token = jwt.sign(
          { id: dbResult._id, name: dbResult.name },
          "the jwt secret key"
        );
        res.send(token);
      });
    });
  } catch (err) {
    console.log("error");
    res.status(500).json({ message: "Server Error" });
  }
});

/************** ADMIN **************/
router.get("/admin", auth, async (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    console.log("from admin", req.id);
    db.collection("users").findOne(
      { _id: new ObjectID(req.id) },
      (err, dbResult) => {
        console.log(dbResult);
        res.json(dbResult);
      }
    );
    // const user = await User.findById(req.user.id);
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
});

/************** GET DATA FOR USER **************/
router.get("/getData", (req, res) => {
  //TODO connect to DB and get all data
  //********** First approach */
  // let jData = {
  //   friendRequest: [{}, {}],
  //   unreadMessages: [
  //     { id: 1, message: "aa" },
  //     { id: 2, message: "bb" },
  //   ],
  // };
  // res.status(200).json(jData);
  //********** Second approach using SSE */
  res.set("Content-Type", "text/event-stream");
  let jData = {
    // in a SSE we can only send text not object
    friendRequest: [{}, {}],
    unreadMessages: [
      { id: 1, message: "aa" },
      { id: 2, message: "bb" },
    ],
  };
  setInterval(() => {
    res.status(200).write(`data:${JSON.stringify(jData)} \n\n`); // instead of 'send' we use 'write'
  }, 1000);
});

module.exports = router;
