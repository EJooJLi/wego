"use strict";

let request = require('request');
// require("dotenv").config();

// Declare weatherapi information, consider moving this to .env for masking key
const baseUrl = "http://api.openweathermap.org/data/2.5/weather";

let params = {
  appid: "&appid=f5823bb83b3698f8b5e825d79e11ec75",
  units: "&units=imperial"
};

// Create a function called getWeather for this module that we eventually
// exports to the apiController
module.exports = {
  getWeather: function(coord) {
    if (coord) {
      request(baseUrl + coordToQuery(coord), function(err, response, body){
        callback(null, body);
      })
    } else {
        callback(new Error("No coords specified for Weather API"));
    }
  }
}

// Defining a callback function to handle errors & responses
function callback(err, data) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(JSON.parse(data));
    return;
  }
}

function coordToQuery(json) {
  var coordString = "lat="+json.lat+"&lon="+json.lng;
  var queryParam = "?" + `${coordString}${params.units}${params.appid}`;
  return queryParam;
}
