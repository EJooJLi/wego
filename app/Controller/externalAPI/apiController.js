// The API controller

/**
* Getting coordinates
*/

var geocoder = NodeGeocoder({
  provider: "google",
  apiKey: "AIzaSyByfXpktliHp3ihiDCBRcDy8JU800DwFZ0",
  httpAdapter: httpAdapter,
  formatter: null
});


// If there are any overrides in address, use the cached override
if (hasOverride) {
  var coord = cachedCoord;
}

// If user has a default address saved on profile & no perm coordinates
// Call the Google Geocoder API and save the coordinates to perm coordinates
else if (defaultAddress && !permCoord) {
  geocoder.geocode(req.address, function(err, res){
  // Assigning latitude and longitude
    var permCoord = {
      lat: res[0].latitude,
      lng: res[0].longitude
    }
    var coord = permCoord;
  }
}
// If user has a default address saved on profile & has perm coordinates
// Use the perm coordinates
else if (defaultAddress && permCoord) {
  var coord = permCoord;
}

/**
* Getting weather data
*/

// Use the coordinates (perm or override) and call weather.js

/**
* Getting the yelp data
*/

// Use the coordinates (perm or override) and call yelp.js

/**
* Getting event data
*/

// Use the coordinates (perm or override) and call event.js

// Save these information and export so that the preference filters can be applied
