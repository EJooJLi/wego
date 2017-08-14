//Require the stock dependencies
var express = require("express"); // For built-in middleware
var morgan = require("morgan"); // A logger middleware
var bodyParser = require("body-parser"); // A bodyParser middleware
var cookieParser = require("cookie-parser"); // A cookieParser middleware
var mongoose = require("mongoose");
//Require all wego dependencies
var db = require("./Model/db");
var userRoutes = require("./Controller/Routes/userRoutes");
// var User = require("./Controller/user.js");

var User = mongoose.model("User");

//Creating an Express app
var app = express();


//**Creating a Router object - This is only needed if we dont create userRoutes up top
// var router = express.Router();
//var someRouter = express.Router(); Load the individual routers
var updateId = function(req, res, next) {

};

//Load the middelware onto the app in sequential order (app.use)

    //First load the global ones that apply to everytime (application level)
    // app.use(morgan());
app.use(bodyParser.json());

    //Then define the ones that apply to specific paths (route level)
    //app.use('/path', someRouter);<--- Use middleware at this someRouter
    // app.use(router); - ** Another one that is not needed if we create individual routers
app.use("./users", userRoutes);
    // app.use(express.static(path.join(__dirname, "public")));

app.get("/users", function(req, res){
  User.find({}, function(err, doc){
    if (!err) {
      res.json(doc);
    } else {
      throw(err);
    }
  });
});

app.post("/users", function(req, res){
  var newUser = new User(req.body);
  console.log(req.body);
  if (!req.body.username) {
    handleError(res, "Invalid input", "Must provide a username.", 400);
  }
  newUser.save(function(err, doc){
    if (!err) {
      res.send(doc);
    } else {
      throw(err);
    }
  });
});

app.get("/users/:id", function(req, res){
  User.findById(req.params.id, function(err, doc) {
    if (err) {
      res.send(err);
    }
    if (doc) {
      res.send(doc);
    } else {
      res.send("No user found with that ID");
    }
  });
});

app.put("/users/:id", function(req, res){
  User.findByIdAndUpdate(req.params.id, req.body, function(err, doc){
    if (err) {
      res.status(500).send(err);
    } else {
      doc.firstname = req.body.firstname || doc.firstname;
      doc.lastname = req.body.lastname || doc.lastname;
      doc.username = req.body.username || doc.username;
      doc.password = req.body.password || doc.password;
      doc.location = req.body.location || doc.location;
      doc.save(function(err, cb){
        if (err) {
          res.status(500).send(err);
        }
        res.send(doc);
      })
    }
  });
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
};

//Start the HTTP listener
app.listen(3000);

//Export the app for testing
module.exports = app;
