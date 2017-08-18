//This Component is for the header of the page.
import { Component } from '@angular/core';

@Component({
  selector: 'userdata',
  templateUrl: './profile.component.html',
  styleUrls: ['./styles.css']

})

export class ProfileComponent {
  //the information will eventually be a GET request from the server
  testinformation = {Username: "Pug", Email: "Pug@pug.com", Password: "*******", Height: "short"}

  infofields = Object.keys(this.testinformation);
  infodetails = Object.values(this.testinformation);

  //edit the list here, and it will automatically update the HTML code
  weatherlist = ["Cold", "Hot", "Warm", "Sunny"];
  activitylist = ["Hiking", "Concerts", "Dining", "Picnics"];

  saveinformation() {
    //The user inputted information becomes the updated one.
    this.infodetails = this.infodetails;
    console.log(this.infodetails);
  }

}
