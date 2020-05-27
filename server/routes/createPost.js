const router = require("express").Router();
const formidable = require("formidable");
const ObjectID = require("mongodb").ObjectID;

router.post("/posts", (req, res) => {
  // we put the variables from the request inside this form
  const form = formidable({ multiples: true });
  form.parse(req, (err, fields, files) => {
    let userId = "5e73759b4c026a0c51d6f48d";
    let message = fields.txtMessage;
    console.log(message);
    const collection = db.collection("users");
    collection.findOneAndUpdate(
      { _id: new ObjectID(userId) }, //it is what we are looking for
      { $push: { posts: { _id: new ObjectID(), message } } },
      function (err, result) {
        if (err) {
          console.log("can not insert");
          return;
        }
        res.json(result.value);
      }
    );
  });
});
module.exports = router;
