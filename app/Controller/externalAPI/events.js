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
// EventsAPI to get the event data
// Change the req.address to req when module is complete
// Also need to export this method so that it can be used in
// app.js
geocoder.geocode(req.address, function(err, res){
// Assigning latitude and longitude
  var lat = res[0].latitude;
  var lng = res[0].longitude;

// Assigning params for eventAPI
  let eventapi = {
    key: "&app_key=Msm3HTBsBfRVV6Ps",
    root: "http://api.eventful.com/json/events/search?",
    coord: {
      "lon": lng,
      "lat": lat
    },
    radius: "&within=10"
  };
  // Creating a string for API use
  var coords="&location="+lat+","+lng;
  // Compose the full API search string
  var weatherapifull=`${eventapi.root}${coords}${eventapi.radius}${eventapi.key}`
  request(weatherapifull, function (error, response, body) {
      console.log(JSON.parse(body.events)); // Print to test results
      return body;
      // Need error handler
  });
});

// Export this out to use on app.js
