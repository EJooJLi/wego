//This Component is for the header of the page.

import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './home.component.html',
  styleUrls: ['./styles.css']

})

export class HomeComponent {

  shownav = true;

  navtoggle (shownav: string) {
    this.shownav=!this.shownav;
  }

  submits = [''];

  formsubmit(input: string) {
    if (input) {
    this.submits.push(input);
    }
  }

}
