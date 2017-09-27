//This Component is for the header of the page.
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpModule, Http, URLSearchParams, RequestOptions } from '@angular/http';
// import { Headers } from '@angular/http';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavBarComponent {
//stuff for navbar
  shownav = false;
  showsignup = false;
  showsignin = false;
  userinfo = {};

  constructor(private http: Http) { }

  navtoggle(): void {
    this.shownav = !this.shownav;
  }

  signuptoggle(): void {
    this.showsignup = !this.showsignup;
  }

  signintoggle(): void {
    this.showsignin = !this.showsignin;
  }

//stuff for signup
  getinfo(
    first:string,
    last:string,
    user:string,
    loc:string,
    pass:string): void {
    this.userinfo = {
      firstname:first,
      lastname:last,
      username:user,
      location:loc,
      password:pass
    };
  }

  postsignup(): void {
    console.log("POST",this.userinfo);
    //let url = `http://localhost:3000/users`;
    //this.http.post(url, this.userinfo, 'Access-Control-Allow-Origin: *').subscribe(res => console.log(res));
  }
}
