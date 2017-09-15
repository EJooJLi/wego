"use strict";

let request = require('request');

// Declare eventapi information, consider moving this to .env for masking key
let eventapi = {
  key: "&app_key=Msm3HTBsBfRVV6Ps",
  root: "http://api.eventful.com/json/events/search?",
  radius: "&within=10&units=miles"
}

// Create a function called getEvents for this module that we eventually
// exports to the apiController
module.exports = {
  getEvents: function(coord) {
    if (coord) {
      var coordString = "&location="+coord.lat+","+coord.lng;
      var eventsURL = `${eventapi.root}${coordString}${eventapi.radius}${eventapi.key}`
      request(eventsURL,{ json: true },(err, response, body) => {
        callback(null, body.events.event);
      });
    } else {
        callback(new Error("No coords specified for Events API"));
    }
  }
}

// Defining a callback function to handle errors & responses
function callback(err, data) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(data);
    return;
  }
}
