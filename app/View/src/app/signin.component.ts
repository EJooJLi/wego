//This Component is for the header of the page.
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'userdata',
  templateUrl: './signin.component.html',
  styleUrls: ['./styles.css']

})

export class SignInComponent {

  userinfo="";

  getinfo(username: string, email: string, password: string) {
    this.userinfo= JSON.stringify([username, email, password]);
  }

  //BEGIN HTTP STUFF
  apiRoot: string = "http://httpbin.org";
  constructor(private http: HttpClient) { }

  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/post`;
    this.http.post(url, this.userinfo).subscribe(res => console.log(res));
  }
  //END HTTP STUFF
}
