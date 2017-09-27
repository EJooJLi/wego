import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface weatherdata {
  weather: string
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template:
  ` <body>
    <navbar></navbar>
    <router-outlet></router-outlet>
`
})

// <body [style.backgroundImage]="'url('+images+')'">
export class AppComponent {
}
