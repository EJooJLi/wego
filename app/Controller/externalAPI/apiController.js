// The API controller

// Require weather.js, yelp.js, events.js
var weather = require("./weather");
var yelp = require("./yelp");
var events = require("./events");
var NodeGeocoder = require("node-geocoder");
var HttpsAdapter = require('node-geocoder/lib/httpadapter/httpsadapter.js');
var httpAdapter = new HttpsAdapter(null, {
  headers: {
    'user-agent': 'My application <email@domain.com>',
    'X-Specific-Header': 'Specific value'
  }
});
require("dotenv").config();


/**
* Getting coordinates
*/
var geocoder = NodeGeocoder({
  provider: "google",
  apiKey: process.env.GOOGLEAPIKEY,
  httpAdapter: httpAdapter,
  formatter: null
});

// Declare an empty coord variable
var coord = {lat: 30.888, lng: 45.632};
// Testing variables
var cachedCoord = {lat: 30.888, lng: 45.632};
var hasOverride = false;
var searchAddress = null;
var myAddress = "680 Folsom St, SF";
var permCoord = null;
var weatherInfo = {};
var eventInfo = {};
var yelpInfo = {};

function google(hasOverride, address, defaultAddress, permCoord, callback){
  // Case 1 - When there's an override that the user initiates by manually searching for
  // a specific address -- We will need to geocode the address 1st before proceeding
  if (hasOverride){
    geocoder.geocode(address, function(err, res){
      if (err) {
        callback(new Error("Geocoding Error!"));
        return;
      } else {
        coord = {
          lat: res[0].latitude,
          lng: res[0].longitude
        }
        return coord;
      }
    });
  }
  // Case 2 - When an user has a defaultAddress but no permanent coordinates, this means
  // that the user has never geocoded before -- We will need to geocode and store it
  else if (defaultAddress != null && permCoord == null) {
    geocoder.geocode(defaultAddress, function(err, res){
      if (err) {
        callback(new Error("Geocoding Error!"));
        return;
      } else {
        coord = {
          lat: res[0].latitude,
          lng: res[0].longitude
        }
        permCoord = coord;
        return coord;
      }
    });
  }
  // Case 3 - When an user has a defaultAddress & a permanent coordinates, this means
  // that the user has geocoded before -- We should just use the existing coord
  else if (defaultAddress != null && permCoord != null) {
    coord = permCoord;
    return coord;
  }
  // // Call the weather API
  // weather.getWeather(coord, callback);
}

function callback(err, data) {
  if(err) {
    console.log(err);
    return;
  }
  console.log(data);
};

google(hasOverride, searchAddress, myAddress, permCoord, weather.getWeather(coord, callback));
