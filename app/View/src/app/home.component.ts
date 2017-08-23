//This Component is for the header of the page.

import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpModule, Http, URLSearchParams, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';


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

  constructor(private http: Http) { }

  userinfo={};

  formsubmit(info: string) {
    this.userinfo={location: info};
  }

  sendinfo() {

    console.log("POST");
    let url = `http://localhost:3000/weather`;
    this.http.post(url, this.userinfo, 'Access-Control-Allow-Origin: *').subscribe(res => console.log(res));
  }
}
