"use strict";

let express = require('express'); // For built-in middleware
let request = require('request');

let yelp = require('yelp-fusion');
// require("dotenv").config();

// Declare yelpAPI information, consider moving this to .env for masking key
let yelpApi = {
  clientId: "gvoopiGyUuYlUpLOuPfjog",
  baseUrl: 'https://api.yelp.com/v3/',
  clientSecret: "p3810uWn3epCNVnPSOItcpiYttrXXL0vbGdGxoWroA8Iadx7ZQtPzIIog0OZ4YXS"
};

// let coord = {
//   latitude: 31.55,
//   longitude: 67.34
// }

// ClientID: gvoopiGyUuYlUpLOuPfjog
// ClientSecret: p3810uWn3epCNVnPSOItcpiYttrXXL0vbGdGxoWroA8Iadx7ZQtPzIIog0OZ4YXS


// Create a function called getWeather for this module that we eventually
// exports to the apiController

module.exports = {
  getYelp: function(coord) {
    if (coord) {
      yelp.accessToken(yelpApi.clientId, yelpApi.clientSecret).then(response => {
        console.log("connected");
        const client = yelp.client(response.jsonBody.access_token);
        const formattedCoord = {
          latitude: coord.lat,
          longitude: coord.lng
        };
        console.log(formattedCoord);
        client.search(formattedCoord).then(response => {
          const firstResult = response.jsonBody.business[0];
          console.log(firstResult);
          const prettyJson = JSON.stringify(firstResult, null, 4);
          console.log(prettyJson);
        });
      }).catch(e => {
        console.log(e);
      });
    } else {
      callback(new Error("No coords specified for Yelp API"));
    }
  }
}
//       var coordString = "lat="+coord.lat+"&lon="+coord.lng;
//       var weatherURL = `${weatherapi.root}${coordString}${weatherapi.units}${weatherapi.key}`
//       request(weatherURL, function(err, response, body){
//         callback(null, body);
//       })
//     } else {
//         callback(new Error("No coords specified for Weather API"));
//     }
//   }
// }

// Defining a callback function to handle errors & responses
var callback = function(err, data) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(JSON.parse(data));
    return;
  }
}
