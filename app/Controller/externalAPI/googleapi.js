//This code successfully takes in ANY address, pings the Googlemaps API to get coordinates.

let express = require("express"); // For built-in middleware
let request = require('request');

let lat;
let long;

let googleapi = {
  key: "&key=AIzaSyByfXpktliHp3ihiDCBRcDy8JU800DwFZ0",
  root: "https://maps.googleapis.com/maps/api/geocode/json?address=",
  address: "4400+Lone+Tree+Drive,+Plano,+Texas"
};

let googleapifull=`${googleapi.root}${googleapi.address}${googleapi.key}`

request(googleapifull, function (error, response, body) {
  let details = JSON.parse(body)
  lat=details.results[0].geometry.location.lat;
  long=details.results[0].geometry.location.lng;
  module.exports.coords = (`lat=${lat}&lon=${long}`);
});
