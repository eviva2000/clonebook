const router = require("express").Router();
const ObjectID = require("mongodb").ObjectID;
router.post("/createpost", (req, res) => {
  let userId = "5e73759b4c026a0c51d6f48d";

  const { message } = req.body;
  console.log(message);
  db.collection("users").findOneAndUpdate(
    { _id: new ObjectID(userId) }, //it is what we are looking for
    { $push: { posts: { _id: new ObjectID(), message } } },
    function (err, result) {
      if (err) {
        console.log("can not insert");
        return;
      }
      res.send(result.value.posts);
    }
  );
  //   res.send({ response: message });
});

module.exports = router;
