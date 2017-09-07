let express = require('express'); // For built-in middleware
let request = require('request');

// Testing by assiging coordinates - remove to do E2E Testing
// var coord = {
//   lat: 30,
//   lng: 55
// }

// Declare WeatherAPI information, consider moving this to .env
let weatherapi = {
  key: "&APPID=740db4574e5fd4a81b4608e9f5d615e6",
  root: "http://api.openweathermap.org/data/2.5/weather\?",
  units: "&units=imperial"
};

// Function to get Weather information
exports.getWeather = function(err, callback) {
    if (err) {
        console.log("Error!", err);
        return;
    } else {
      // Create a coordinate string for weather API
      var coordString = "lat="+coord.lat+"&lon="+coord.lng;
      var weatherURL = `${weatherapi.root}${coordString}${weatherapi.units}${weatherapi.key}`
      request(weatherURL, function(err, response, body){
        console.log(JSON.parse(body));
        return body;
      });
    }
}

// Testing
// getWeather(coord);

// Export this out to use on apiController.js
