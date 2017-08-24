//The GoogleAPI coordinates are sent to the weather API to get weather information.

let express = require('express'); // For built-in middleware
let request = require('request');
var NodeGeocoder = require("node-geocoder");
var HttpsAdapter = require('node-geocoder/lib/httpadapter/httpsadapter.js')
var httpAdapter = new HttpsAdapter(null, {
  headers: {
    'user-agent': 'My application <email@domain.com>',
    'X-Specific-Header': 'Specific value'
  }
});

// This is a placeholder for a request, with the address format
var req = {address:"4400 Lone Tree Drive, Plano, Texas"};

// Assigning params for NodeGeocoder, using our API Key and Google Map API
var geocoder = NodeGeocoder({
  provider: "google",
  apiKey: "AIzaSyByfXpktliHp3ihiDCBRcDy8JU800DwFZ0",
  httpAdapter: httpAdapter,
  formatter: null
});

// The actual processing, geocoding an address and sends it to
// WeatherAPI to get the weather data
// Change the req.address to req when module is complete
// Also need to export this method so that it can be used in
// app.js
geocoder.geocode(req.address, function(err, res){
// Assigning latitude and longitude
  var lat = res[0].latitude;
  var lng = res[0].longitude;

// Assigning params for weatherAPI
  let weatherapi = {
    key: "&APPID=740db4574e5fd4a81b4608e9f5d615e6",
    root: "http://api.openweathermap.org/data/2.5/weather\?",
    coord: {
      "lon": lng,
      "lat": lat
    },
    units: "&units=imperial"
  };
  // Creating a string for API use
  var coords="lat="+lat+"&lon="+lng;
  // Compose the full API search string
  var weatherapifull=`${weatherapi.root}${coords}${weatherapi.units}${weatherapi.key}`
  request(weatherapifull, function (error, response, body) {
      console.log(body); // Print to test results
      return body;
      // Need error handler
  });
});

// Export this out to use on app.js
