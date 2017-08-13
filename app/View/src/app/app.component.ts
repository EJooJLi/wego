import { Component } from '@angular/core';

export class activity {
  name: string;
  weather: string;
  category: string;
}

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html', You CANT have a templateUrl AND a template in a component.
  template: `
  <h1>{{ToDo}}</h1>
  <div>
    <label>name: </label>
    <input [(ngModel)]="entername" placeholder="Your Name">
  </div>
  <h2>{{hiking.name}}</h2>
  <div><label>Weather: </label>{{hiking.weather}}</div>
  <div><label>Category: </label>{{hiking.category}}</div>
  <h1> Cuisines! </h1>
  <ul>
    <li *ngFor="let name of cuisines">
    {{name}}
    </li>
  </ul>
  `
})
//name can be anything! but cuisines is an object
//The *ngFor in the <li> element is the Angular "repeater" directive.
//It marks that <li> element (and its children) as the "repeater template".
//So it can actually be <p> as well!

export class AppComponent {
  entername = 'Enter your name here';
  ToDo = 'Things to do';
  hiking: activity = {
    name: 'Hiking',
    weather: 'Cool',
    category: 'Outdoors'
  };
  cuisines = ['American','Korean','Chinese','Indian'];
  price = ['$$$','$$','$'];
  choice = this.cuisines[0];
}
