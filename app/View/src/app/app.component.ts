import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface weatherdata {
  weather: string
}

@Component({
  selector: 'app-root',
  template:`<navbar></navbar><router-outlet></router-outlet>
`
})

export class AppComponent {
// implements OnInit
  // constructor(private http: HttpClient) {
  //
  // }
  //
  // ngOnInit(): void {
  //   this.http.get<weatherdata>('http://api.openweathermap.org/data/2.5/weather?zip=94124&APPID=740db4574e5fd4a81b4608e9f5d615e6').subscribe(
  //     data => {
  //       console.log(data.weather);
  //   },
  //     (err: HttpErrorResponse) => {
  //       if (err.error instanceof Error){
  //         console.log("Client Side Error occurred");
  //       } else {
  //         console.log("Server Side Error occurred");
  //       }
  //     }
  //   )
  //
  //   const req = this.http.post('https://jsonplaceholder.typicode.com/posts', {
  //     title: "foo",
  //     body: "bar",
  //     userId: 1
  //   })
  //   .subscribe(
  //     res => {
  //       console.log(res);
  //     },
  //     err => {
  //       console.log("error occurred");
  //     }
  //   )
  //
  // }
}
