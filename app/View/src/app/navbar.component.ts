//This Component is for the header of the page.
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpModule, Http, URLSearchParams, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';

@Component({
  selector: 'navbar',
  template:
  `
    <nav id="navshow" (mouseenter)="navtoggle()" (mouseleave)="navtoggle()">
      <div [hidden]="!shownav">
        <button type="button" class="navbutton" routerLink="../home"><p>Home</p></button><br/>
        <button type="button" class="navbutton" (click)="signuptoggle()"><p>Sign Up</p></button><br/>
        <button type="button" class="navbutton" (click)="signintoggle()"><p>Sign In</p></button><br/>
        <button type="button" class="navbutton" routerLink="../profile"><p>MyProfile</p></button><br/>
        <button type="button" class="navbutton" routerLink="../feed"><p>Feed</p></button><br/>
      </div>
    </nav>

    <div class="signinup" [hidden]="!showsignup">
    <h1> Sign Up! </h1><br/>
      <form>
        <p>First Name</p>
        <input type="text" #first id="signupinfo">
        <p>Last Name</p>
        <input type="text" #last id="signupinfo">
        <p>Username</p>
        <input type="text" #user id="signupinfo">
        <p>Location</p>
        <input type="text" #loc id="signupinfo">
        <p>Password</p>
        <input type="text" #pass id="signupinfo">
        <br/>
        <button type="submit" id="signupinsubmit" (click)="getinfo(first.value, last.value, user.value, loc.value, pass.value)"(click)="postsignup()"> Submit </button>
      </form>
      <button type="button" id="signupinsubmit" (click)="signuptoggle()">Close</button>
    </div>

    <div class="signinup" [hidden]="!showsignin">
    <h1> Sign In! </h1><br/>
      <form>
        <p>Username</p>
        <input type="text" #user id="signupinfo">
        <p>Password</p>
        <input type="text" #pass id="signupinfo">
        <br/>
        <button type="submit" id="signupinsubmit" (click)="getinfo(first.value, last.value, user.value, loc.value, pass.value)"(click)="postsignup()"> Submit </button>
      </form>
      <button type="button" id="signupinsubmit" (click)="signintoggle()">Close</button>
    </div>
  `,
  styleUrls: ['./styles.css']

})

export class NavBarComponent {
//stuff for navbar
  shownav = false;
  showsignup = false;
  showsignin = false;

  navtoggle () {
    this.shownav=!this.shownav;
  }

  signuptoggle () {
    this.showsignup=!this.showsignup;
  }

  signintoggle () {
    this.showsignin=!this.showsignin;
  }

//stuff for signup
userinfo={};
getinfo(first:string, last:string, user:string, loc:string, pass:string) {
  this.userinfo={firstname:first,lastname:last,username:user,location:loc, password:pass};
}

  constructor(private http: Http) { }

  postsignup() {
    console.log("POST",this.userinfo);
    //let url = `http://localhost:3000/users`;
    //this.http.post(url, this.userinfo, 'Access-Control-Allow-Origin: *').subscribe(res => console.log(res));
  }
}
