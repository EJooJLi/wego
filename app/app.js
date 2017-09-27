//Require the stock dependencies
var express = require("express"); // For built-in middleware
//var morgan = require("morgan"); // A logger middleware
var bodyParser = require("body-parser"); // A bodyParser middleware
//var cookieParser = require("cookie-parser"); // A cookieParser middleware
var mongoose = require("mongoose");

//Require all wego dependencies
var db = require("./Model/db");
var user_controller = require("./Controller/user");
var User = mongoose.model("User");

//Creating an Express app
var app = express();

//**Creating a Router object - This is only needed if we dont create userRoutes up top
// var router = express.Router();
//var someRouter = express.Router(); Load the individual routers
var router = express.Router();

//Load the middelware onto the app in sequential order (app.use)

    //First load the global ones that apply to everytime (application level)
    // app.use(morgan());

app.use(router);

// CORS posting
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.use(bodyParser.json());

require("./Controller/Routes/userRoutes")(router);

// CRUD Operations
// GET showing all users
router.get("/users", user_controller.get);
// GET showing a specific user using userId
router.get("/users/:id", user_controller.getbyId)
// POST and create a new user
router.post("/users", user_controller.create);
// PUT to update a user by userId
router.put("/users/:id", user_controller.update);
// DELETE to delete a user by userId
router.delete("/users/:id", user_controller.removeById);

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
};

//Start the HTTP listener
app.listen(3000);
console.log("listening");

//Export the app for testing
module.exports = app;
