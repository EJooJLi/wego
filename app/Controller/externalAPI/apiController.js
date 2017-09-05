// The API controller

// Require weather.js, yelp.js, events.js
var weather = require("./weather");
var yelp = require("./yelp");
var events = require("./events");
var NodeGeocoder = require("node-geocoder");
var HttpsAdapter = require('node-geocoder/lib/httpadapter/httpsadapter.js')
var httpAdapter = new HttpsAdapter(null, {
  headers: {
    'user-agent': 'My application <email@domain.com>',
    'X-Specific-Header': 'Specific value'
  }
});

/**
* Getting coordinates
*/
var geocoder = NodeGeocoder({
  provider: "google",
  apiKey: "AIzaSyByfXpktliHp3ihiDCBRcDy8JU800DwFZ0",
  httpAdapter: httpAdapter,
  formatter: null
});

// Declare an empty coord variable
var coord = {};
// Testing variables
var cachedCoord = {};
var hasOverride = false;
var defaultAddress = "2655 Prosperity Ave Fairfax VA 22031";
var permCoord = {};

// 3 different coord definitions are defined below in the IF-ELSEIF statement

// If there are any overrides in address, use the cached override
if (hasOverride) {
  coord = cachedCoord;
  console.log("1");
  return coord;
}

// If user has a default address saved on profile & no perm coordinates
// Call the Google Geocoder API and save the coordinates to perm coordinates
else if (defaultAddress != null && permCoord != null) {
  // geocoder.geocode(req.address, function(err, res){
  geocoder.geocode(defaultAddress, function(err, res){
  // Assigning latitude and longitude
    var permCoord = {
      lat: res[0].latitude,
      lng: res[0].longitude
    }
    coord = permCoord;
    console.log("2"+coord.lat);
    return coord;
  });
}
// If user has a default address saved on profile & has perm coordinates
// Use the perm coordinates
else if (defaultAddress != null && permCoord == null) {
  coord = permCoord;
  console.log("3"+coord);
  return coord;
}

/**
* Getting weather data
*/

// Use the coordinates (perm or override) and call weather.js
function getWeather(coord, callback) {
  weather.getWeather(coord, function(err, data){
    if (err) {
      return callback(err);
    } else {
      return callback(data); //may need to add a try-catch & parse JSON
    }
  });
}

/**
* Getting the yelp data
*/

// Use the coordinates (perm or override) and call yelp.js
function getYelp(coord, callback) {
  yelp.getYelp(coord, function(err, data){
    if (err) {
      return callback(err);
    } else {
      return callback(data); //may need to add a try-catch & parse JSON
    }
  });
}

/**
* Getting event data
*/

// Use the coordinates (perm or override) and call event.js
function getEvents(coord, callback) {
  events.getEvents(coord, function(err, data){
    if (err) {
      return callback(err);
    } else {
      return callback(data); //may need to add a try-catch & parse JSON
    }
  });
}
// Save these information and export so that the preference filters can be applied
