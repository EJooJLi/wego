//This Component is for the header of the page.

import { Component } from '@angular/core';

//this is a "domain model". It's better to not have everythign in the Component that is being exported.
class Joke {
  setup: string;
  punchline: string;
  hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

@Component({
  selector: 'tester',
  template: `
  <div class="card card-block"
     *ngFor="let joke of jokes">
  <h4 class="card-title">{{joke.setup}}</h4>
  <p class="card-text"
     [hidden]="joke.hide">{{joke.punchline}}</p>
  <a class="btn btn-primary"
      (click)="joke.toggle()">Tell Me </a>
  </div>
  `
})


export class TestComponent {
  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
  }

  toggle(joke) {
    joke.hide = !joke.hide;
  }
}
