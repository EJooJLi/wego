let express = require('express'); // For built-in middleware
let request = require('request');

// Testing by assiging coordinates - remove to do E2E Testing
var coord = {
  lat: 30,
  lng: 55
}

// Declare eventapi information, consider moving this to .env
let eventapi = {
  key: "&app_key=Msm3HTBsBfRVV6Ps",
  root: "http://api.eventful.com/json/events/search?"
}

// Function to get Events information
var getEvents = function(coord, err, callback) {
    if (err) {
        return callback(err);
    } else {
      // Create a coordinate string for events API
      var coordString = "&location="+coord.lat+","+coord.lng;
      var eventsURL = `${eventapi.root}${coordString}${eventapi.radius}${eventapi.key}`
      request(eventsURL, function(error, response, body){
        console.log(JSON.parse(body));
        return body;
      });
    }
}

// Testing
getEvents(coord);

// Export this out to use on apiController.js
module.exports = getEvents;
