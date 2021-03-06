var express = require("express");

var router = express.Router();

// Import the model (guitar.js) to use its database functions.
var guitar = require("../models/guitar.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  guitar.selectAll(function(data) {
    var hbsObject = {
      guitars: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/guitars", function(req, res) {
  guitar.insertOne([
    "guitar_name", "strummed"
  ], [
    req.body.guitar_name, req.body.strummed
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/guitars/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  console.log(req.body)

  guitar.updateOne({
    strummed: req.body.strummed
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
