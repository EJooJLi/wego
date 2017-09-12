let express = require('express'); // For built-in middleware
let request = require('request');

// Declare eventapi information, consider moving this to .env
let eventapi = {
  key: "&app_key=Msm3HTBsBfRVV6Ps",
  root: "http://api.eventful.com/json/events/search?",
  radius: "&within=10&units=miles"
}

// Function to get Events information
// var getEvents = function(err, callback) {
//     if (err) {
//       console.log("Error!", err);
//       return;
//     } else {
//       // Create a coordinate string for events API
//       var coordString = "&location="+coord.lat+","+coord.lng;
//       var eventsURL = `${eventapi.root}${coordString}${eventapi.radius}${eventapi.key}`
//       request(eventsURL, function(error, response, body){
//         console.log(JSON.parse(body));
//         return body;
//       });
//     }
// }

module.exports = {
  getEvents: function(coord) {
    if (coord) {
      var coordString = "&location="+coord.lat+","+coord.lng;
      var eventsURL = `${eventapi.root}${coordString}${eventapi.radius}${eventapi.key}`
      request(eventsURL, function(err, response, body){
        callback(null, body);
      })
    } else {
        callback(new Error("No coords"));
    }
  }
}

// Defining a callback function to handle errors & responses
var callback = function(err, data) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(JSON.parse(data[0]));
    return;
  }
}
