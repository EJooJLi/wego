//DB handler
require("dotenv").config();

//First we load mongoose
var mongoose = require("mongoose");
//Then create the connection
var userdbConn = process.env.DB_CONN;
var db = mongoose.connect(userdbConn, {
  useMongoClient: true,
});
mongoose.Promise = require("bluebird");

// CONNECTION EVENTS
db.on('connected', function () {
  console.log('Mongoose default connection open to MLAB');
});

module.exports = exports = db;
