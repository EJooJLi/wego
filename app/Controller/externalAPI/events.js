"use strict";

let request = require('request');

const baseUrl = "http://api.eventful.com/json/events/search";

// Declare eventapi information, consider moving this to .env for masking key
let params = {
  key: "&app_key=Msm3HTBsBfRVV6Ps",
  radius: "&within=10&units=miles"
}

// Create a function called getEvents for this module that we eventually
// exports to the apiController
module.exports = {
  getEvents: function(coord) {
    if (coord) {
      request(baseUrl + coordToQuery(coord), {json:true}, function(err, response, body){
        callback(null, body.events.event);
      })
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

// Defining a function to construct the queries from plain coords
function coordToQuery(json) {
  var coordString = "&location="+json.lat+","+json.lng;
  var queryParam = "?" + `${coordString}${params.radius}${params.key}`;
  return queryParam;
}
