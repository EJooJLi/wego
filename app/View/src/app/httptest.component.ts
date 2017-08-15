import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


interface data {
  headers: string
}

@Component({
 selector: 'app',
 template: `
 <div class="row">
  <div class="m-t-1">
  	<button class="btn btn-primary" (click)="doGET()">GET</button>
  	<button class="btn btn-primary" (click)="doPOST()">POST</button>
  	<button class="btn btn-primary" (click)="doPUT()">PUT</button>
  	<button class="btn btn-primary" (click)="doDELETE()">DELETE</button>
	</div>
</div>

<div class="row">
  <div class="m-t-1">
  	<button class="btn btn-secondary" (click)="doGETAsPromise()">As Promise</button>
  	<button class="btn btn-secondary" (click)="doGETAsPromiseError()">Error as Promise</button>
  	<button class="btn btn-secondary" (click)="doGETAsObservableError()">Error as Observable</button>
	</div>
</div>

<div class="row">
  <div class="m-t-1">
  	<button class="btn btn-danger" (click)="doGETWithHeaders()">With Headers</button>
	</div>
</div>
 `
})
export class HttpComponent {
  apiRoot: string = "http://httpbin.org";
  testtext = "yay";

  constructor(private http: HttpClient) { }

  doGET() {
    console.log("GET");
    let url = `${this.apiRoot}/get`;
    this.http.get<data>(url).subscribe(res => console.log(res.headers));
  }

  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/post`;
    this.http.post(url, this.testtext).subscribe(res => console.log(res));
  }

  doPUT() {
    console.log("PUT");
  }

  doDELETE() {
    console.log("DELETE");
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");
  }
}
