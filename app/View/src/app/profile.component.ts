//This Component is for the header of the page.
import { Component } from '@angular/core';


@Component({
  selector: 'userdata',
  templateUrl: './profile.component.html',
  styleUrls: ['./styles.css']

})

export class ProfileComponent {
  //the information will eventually be a GET request from the server
  userinfo = {username: "Pug", email: "Pug@pug.com", password: "*******", location: "San Francisco, CA"}
  weatherlist = ["Cold", "Hot", "Sunny", "Cloudy", "Rainy", "Snowy", "Foggy", "Windy"];
  activitylist = ["Hiking", "Concerts", "Dining", "Picnics", "Sightseeing", "Urban Exploring", "Museums"];

  weathercheck = {};
  activitycheck = {};
  //x="";

//This part automatically creates an array of objects based on the weatherlist and activitylist
 ngOnInit() {
    for (let i=0; i<this.weatherlist.length; i++) {
      this.weathercheck[this.weatherlist[i]] = "";
    }
    for (let j=0; j<this.activitylist.length; j++) {
      this.activitycheck[this.activitylist[j]] = "";
    }
  }

  saveinformation() {
  //  if (this.x!=="") {
  //    document.cookie = this.x, "; expires=Thu, 18 Dec 2015 12:00:00 UTC; path=/home";}

    this.userinfo = this.userinfo;
    this.activitycheck = this.activitycheck;
    this.weathercheck = this.weathercheck;
    console.log(this.userinfo, this.weathercheck, this.activitycheck);
  }


}
