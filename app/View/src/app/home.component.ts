//This Component is for the header of the page.

import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpModule, Http, URLSearchParams, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';


@Component({
  selector: 'header',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent {

  profpic = "https://avatars2.githubusercontent.com/u/18385437?v=4&s=460";

  homecards = [
    "https://www.romanticasheville.com/sites/default/files/images/basic_page/biltmore_concerts2.jpg",
    "Currently in San Francisco: Stern Grove Outdoor Music Festival",
    "https://adventurejunkies-theadventurejunk.netdna-ssl.com/wp-content/uploads/hiking-guide-copy-2.jpg",
    "Calendar snippet here",
    this.profpic,
    "Weather example here",
    "http://stooffi.com/wp-content/uploads/2016/02/P1220481.jpg",
    "GoPug helps you do the things you love",
    "https://drscdn.500px.org/photo/61919969/q%3D80_m%3D1500/4d55da71b5871f528b663e0902a9cb8d"
  ]

}
