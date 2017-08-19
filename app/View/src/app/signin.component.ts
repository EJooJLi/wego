//This Component is for the header of the page.
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpModule, Http, URLSearchParams, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { citylist } from './citylist';
import { countrycodes } from './countrycodes'

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./styles.css']

})

export class SignInComponent {

  // arrList = require("city.list.json")

  userinfo={};
  getinfo(first:string, last:string, user:string, loc:string, pass:string) {
    this.userinfo={firstname:first,lastname:last,username:user,location:loc, password:pass};
  }

    constructor(private http: Http) { }

    doPOST() {

      console.log("POST");
      let url = `http://localhost:3000/users`;
      this.http.post(url, this.userinfo, 'Access-Control-Allow-Origin: *').subscribe(res => console.log(res));
    }

}
