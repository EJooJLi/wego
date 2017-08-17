//This Component is for the header of the page.
import { Component } from '@angular/core';

@Component({
  selector: 'userdata',
  templateUrl: './profile.component.html',
  styleUrls: ['./styles.css']

})

export class ProfileComponent {

  userinformation = ["Username", "Email", "Password", "Zipcode"];
  //the details will eventually be a GET request from the server
  details = ["Pug", "Pugs@Gmail.com", "********", "90210"];
  test = this.details[0];

  //edit the list here, and it will automatically update the HTML code
  weatherlist = ["Cold", "Hot", "Warm", "Sunny"];
  activitylist = ["Hiking", "Concerts", "Dining", "Picnics"];

  saveinformation() {
    //The user inputted information becomes the updated one.
    this.details = this.details;
    console.log(this.details);
  }

}
