// The API controller

"use strict";

// Require weather.js, yelp.js, events.js
var weather = require("./weather");
var yelp = require("./yelp");
var events = require("./events");
var NodeGeocoder = require("node-geocoder");
var HttpsAdapter = require("node-geocoder/lib/httpadapter/httpsadapter.js");
var httpAdapter = new HttpsAdapter(null, {
  headers: {
    "user-agent": "My application <email@domain.com>",
    "X-Specific-Header": "Specific value"
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
var coord = {};
// Testing variables
var hasOverride = false;
var searchAddress = null;
var myAddress = "2655 Prosperity Ave Fairfax";
var permCoord = null;
// var weatherInfo = {};
// var eventInfo = {};
// var yelpInfo = {};

function google(hasOverride, address, defaultAddress, permCoord){
  // Case 1 - When there's an override that the user initiates by manually searching for
  // a specific address -- We will need to geocode the address 1st before proceeding
  if (hasOverride){
    geocoder.geocode(address, function(err, res){
      if (err) {
        return err;
      } else {
        coord = {
          lat: res[0].latitude,
          lng: res[0].longitude
        }
        // Using the coord given to override permCoord
        weather.getWeather(coord);
        events.getEvents(coord);
      }
    });
  }
  // Case 2 - When an user has a defaultAddress but no permanent coordinates, this means
  // that the user has never geocoded before -- We will need to geocode and store it
  else if (defaultAddress != null && permCoord == null) {
    geocoder.geocode(defaultAddress, function(err, res){
      if (err) {
        return err;
      } else {
        coord = {
          lat: res[0].latitude,
          lng: res[0].longitude
        }
        // Updating permCoord since it was empty
        permCoord = coord;
        weather.getWeather(permCoord);
        events.getEvents(permCoord);
        // yelp.getYelp(permCoord);
      }
    });
  }
  // Case 3 - When an user has a defaultAddress & a permanent coordinates, this means
  // that the user has geocoded before -- We should just use the existing coord
  else if (defaultAddress != null && permCoord != null) {
    // Flat out get weather and event info using the permCoord
    weather.getWeather(permCoord);
    events.getEvents(permCoord);
  }
}

// Actual execution, running googleAPI to get coord first, then passing the coord into weatherAPI
google(hasOverride, searchAddress, myAddress, permCoord);
