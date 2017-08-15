//This Component is for the header of the page.

import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent {
  submits = [''];

  formsubmit(input: string) {
    if (input) {
    this.submits.push(input);
    }
  }

}
