//This code successfully takes in ANY address, pings the Googlemaps API to get coordinates.
//The coordinates are then sent to the weather API to get weather information.

var express = require("express"); // For built-in middleware
var request = require('request');

let googleapi = {
  key: "&key=AIzaSyByfXpktliHp3ihiDCBRcDy8JU800DwFZ0",
  root: "https://maps.googleapis.com/maps/api/geocode/json?address=",
  address: "4400+Lone+Tree+Drive,+Plano,+Texas"
};

let googleapifull=`${googleapi.root}${googleapi.address}${googleapi.key}`

let weatherapi = {
  key: "&APPID=740db4574e5fd4a81b4608e9f5d615e6",
  root: "http://api.openweathermap.org/data/2.5/weather\?",
  lat: "",
  long: "",
  units: "&units=imperial"
};

var lat="";
var long="";

request(googleapifull, function (error, response, body) {
  let details = JSON.parse(body)
  lat=details.results[0].geometry.location.lat;
  long=details.results[0].geometry.location.lng;
  console.log(lat, long); // Print the stuff
  return(lat);
});

//I don't yet know how to do callback functions... So there's a time delay on here for now.
setTimeout(function() {
  weatherapi.lat = lat;
  weatherapi.long = long;
  console.log(weatherapi.lat, weatherapi.long);

  var weatherapifull=`${weatherapi.root}lat=${weatherapi.lat}&lon=${weatherapi.long}${weatherapi.units}${weatherapi.key}`
  console.log(weatherapifull);

  request(weatherapifull, function (error, response, body) {
    let details = JSON.parse(body)
    console.log(details);
  });
}, 3000);
