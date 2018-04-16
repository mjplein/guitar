// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var guitar = {
  selectAll: function(cb) {
    orm.selectAll("guitars", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("guitars", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("guitars", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (guitars_controller.js).
module.exports = guitar;
