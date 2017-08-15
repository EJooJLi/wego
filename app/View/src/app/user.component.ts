//This Component is for the header of the page.
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'userdata',
  templateUrl: './user.component.html',
  styleUrls: ['./home.component.css']

})

export class UserComponent {
  //BEGIN HTTP STUFF - STILL A MYSTERY
  constructor(private http: HttpClient) { }
  apiRoot: string = "http://httpbin.org";

  userinfo="";

  userinput(input: string) {
    if (input) {
    this.userinfo=input;
    }
  }

  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/post`;
    this.http.post(url, this.userinfo).subscribe(res => console.log(res));
  }

  //END HTTP STUFF

}
