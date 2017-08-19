//This Component is for the header of the page.
import { Component } from '@angular/core';


@Component({
  selector: 'userdata',
  templateUrl: './profile.component.html',
  styleUrls: ['./styles.css']

})

export class ProfileComponent {
  //the information will eventually be a GET request from the server
  userinfo = {username: "Pug", email: "Pug@pug.com", password: "*******"}
  weatherlist = ["Cold", "Hot", "Warm", "Sunny"];
  activitylist = ["Hiking", "Concerts", "Dining", "Picnics"];

  saveinformation() {
    this.userinfo = this.userinfo;
    console.log(this.userinfo);
  }



}
