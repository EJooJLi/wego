//DB handler
//First we load mongoose
var mongoose = require("mongoose");
//Then create the connection
var userdbConn = "mongodb://ejl:p%40ssword1@cluster0-shard-00-00-trzpy.mongodb.net:27017,cluster0-shard-00-01-trzpy.mongodb.net:27017,cluster0-shard-00-02-trzpy.mongodb.net:27017/userdb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
var db = mongoose.connect(userdbConn, {
  useMongoClient: true,
});

// CONNECTION EVENTS
db.on('connected', function () {
  console.log('Mongoose default connection open to ' + userdbConn);
});

module.exports = exports = db;
