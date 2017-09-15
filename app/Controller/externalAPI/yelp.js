"use strict";

let request = require('request');

const baseUrl = "https://api.yelp.com/v3/";
// let yelp = require('yelp-fusion');
// require("dotenv").config();

// Declare yelpAPI information, consider moving this to .env for masking key
let params = {
  clientId: "gvoopiGyUuYlUpLOuPfjog",
  clientSecret: "p3810uWn3epCNVnPSOItcpiYttrXXL0vbGdGxoWroA8Iadx7ZQtPzIIog0OZ4YXS"
};

// ClientID: gvoopiGyUuYlUpLOuPfjog
// ClientSecret: p3810uWn3epCNVnPSOItcpiYttrXXL0vbGdGxoWroA8Iadx7ZQtPzIIog0OZ4YXS


// Create a function called getYelp for this module that we eventually
// exports to the apiController

module.exports = {
  getYelp: function(coord) {
    if (coord) {
      request();
    }
  }
}

// module.exports = {
//   getYelp: function(coord) {
//     if (coord) {
//       yelp.accessToken(yelpApi.clientId, yelpApi.clientSecret).then(response => {
//         console.log("connected");
//         const client = yelp.client(response.jsonBody.access_token);
//         const formattedCoord = {
//           latitude: coord.lat,
//           longitude: coord.lng
//         };
//         console.log(formattedCoord);
//         client.search(formattedCoord).then(response => {
//           const firstResult = response.jsonBody.business[0];
//           console.log(firstResult);
//           const prettyJson = JSON.stringify(firstResult, null, 4);
//           console.log(prettyJson);
//         });
//       }).catch(e => {
//         console.log(e);
//       });
//     } else {
//       callback(new Error("No coords specified for Yelp API"));
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

// Defining a function to construct the queries from plain coords
function coordToQuery(json) {
  var coordString = "latitude="+json.lat+"&longitude="+json.lng;
  var queryParam = "?" + `${coordString}${params.units}${params.appid}`;
  return queryParam;
}
