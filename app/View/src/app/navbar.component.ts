//This Component is for the header of the page.
import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  template:
  `
  <nav id="navbar">
    <button type="button" id="menubutton" (click)="navtoggle()"></button>
    <div [hidden]="!shownav" style="margin-left: 50px; margin-top: 15px;">
      <button type="button" class="navbutton" routerLink="../home"><p>Home</p></button>
      <button type="button" class="navbutton" routerLink="../signup"><p>Sign Up</p></button>
      <button type="button" class="navbutton" routerLink="../signin"><p>Sign In</p></button>
    </div>
  `,
  styleUrls: ['./styles.css']

})

export class NavBarComponent {

  shownav = true;

  navtoggle () {
    this.shownav=!this.shownav;
  }
}
