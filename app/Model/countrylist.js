var citylist = require('./assets/citylist.js')
var countrycodes = require('./assets/countrycodes.js')

//this code compiles a list of the countries from the master citylist, but the countries are 2 letter acronyms.
//In order to have full country names, the algorithm replaces the acronyms with full names from another file.

let countrylist=[];

for (let i=0; i<citylist.length; i++) {
  if (countrylist.indexOf(citylist[i].country) === -1) {
  countrylist.push(citylist[i].country);
  }
}

for (let i=0; i<countrylist.length; i++) {
  for (let j=0; j<countrycodes.length; j++) {
    if (countrylist[i] === countrycodes[j].Code) {
      countrylist[i]=countrycodes[j].Name;
    }
  }
}

console.log(countrylist.sort());
