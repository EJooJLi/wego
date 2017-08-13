//This Component is for the header of the page.

import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  title = 'WeGo is the place where there\'s never a dull day';
  Mission_statement = 'To provide recommendations of personalized activites based on dates and weather';
  submits = [''];

  formsubmit(prompt: string) {
    if (prompt) {
    this.submits.push(prompt);
    }
  }

}
