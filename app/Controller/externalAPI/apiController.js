// The API controller

/**
* Getting coordinates
*/

// If user has a default address saved on profile & no perm coordinates
// Call the Google Geocoder API and save the coordinates to perm coordinates

// If user has a default address saved on profile & has perm coordinates
// Use the perm coordinates

// If there are any overrides in address, use the cached override

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
