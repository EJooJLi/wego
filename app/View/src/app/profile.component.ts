//This Component is for the header of the page.
import { Component } from '@angular/core';

@Component({
  selector: 'userdata',
  templateUrl: './profile.component.html',
  styleUrls: ['./styles.css']

})

export class ProfileComponent {

  Username="James"
  Email="JamesLi@pug.com"
  Password="******"
  Zipcode="90210"

}
