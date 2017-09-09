"use strict";

let express = require('express'); // For built-in middleware
let request = require('request');
require("dotenv").config();

let weatherapi = {
  key: "&appid=f5823bb83b3698f8b5e825d79e11ec75",
  root: "http://api.openweathermap.org/data/2.5/weather\?",
  units: "&units=imperial"
};

module.exports = {
  getWeather: function(coord) {
    if (coord) {
      var coordString = "lat="+coord.lat+"&lon="+coord.lng;
      var weatherURL = `${weatherapi.root}${coordString}${weatherapi.units}${weatherapi.key}`
      request(weatherURL, function(err, response, body){
        // console.log(JSON.parse(body));

        callback(null, body);
      })
    } else {
        callback(new Error("No coords"));
    }
  }
}

var callback = function(err, data) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(JSON.parse(data));
    return;
  }
}
