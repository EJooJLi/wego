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
  images =  ["http://az616578.vo.msecnd.net/files/2015/06/08/635693880042525992-518822648_couple-hiking-valley.jpg",
             "http://cdn.visitmammoth.com/sites/default/master/files/images/hero_images/hiking.jpg",
             "http://www.greenland.com/media/4748/hiking-in-east-greenland-1.jpg?width=1920&height=1280&mode=crop&format=jpg&quality=95",
              "https://blogmedia.evbstatic.com/wp-content/uploads/rally/2017/05/19122957/1U8A9059-49-1500x750.jpg"];
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

  getinfo() {

    console.log("GET");
    let url = `http://localhost:3000/weather`;
    this.http.get(url, this.userinfo).subscribe(res => console.log(res.json()));
  }
}
