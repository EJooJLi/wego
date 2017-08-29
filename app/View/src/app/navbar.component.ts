//This Component is for the header of the page.
import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  template:
  `
    <nav id="navshow" (mouseenter)="navtoggle()" (mouseleave)="navtoggle()">
      <div [hidden]="!shownav">
        <button type="button" class="navbutton" routerLink="../home"><p>Home</p></button><br/>
        <button type="button" class="navbutton" routerLink="../signup"><p>Sign Up</p></button><br/>
        <button type="button" class="navbutton" routerLink="../signin"><p>Sign In</p></button><br/>
        <button type="button" class="navbutton" routerLink="../profile"><p>MyProfile</p></button><br/>
        <button type="button" class="navbutton" routerLink="../feed"><p>Feed</p></button><br/>
      </div>
    </nav>
  `,
  styleUrls: ['./styles.css']

})

export class NavBarComponent {

  shownav = false;

  navtoggle () {
    this.shownav=!this.shownav;
  }
}
