//The GoogleAPI coordinates are sent to the weather API to get weather information.

let express = require('express'); // For built-in middleware
let request = require('request');
let coordinates = require('./googleapi.js')
var app = express();
var router = express.Router();
var bodyParser = require("body-parser"); // A bodyParser middleware
app.use(router);

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
router.use(bodyParser.json());

let weatherapi = {
  key: "&APPID=740db4574e5fd4a81b4608e9f5d615e6",
  root: "http://api.openweathermap.org/data/2.5/weather\?",
  lat: "",
  long: "",
  units: "&units=imperial"
};

//I don't yet know how to do callback functions... So there's a time delay on here for now.
// setTimeout(function() {
//
//   var weatherapifull=`${weatherapi.root}${coordinates.coords}${weatherapi.units}${weatherapi.key}`
//   console.log(weatherapifull);
//   request(weatherapifull, function (error, response, body) {
//     let details = JSON.parse(body)
//     console.log(details);
//   });
// }, 1000);

router.post("/weather", function (req, res) {
  console.log(res);
})

app.listen(3000);
console.log("listening");
