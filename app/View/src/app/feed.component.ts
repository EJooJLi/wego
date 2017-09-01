//This Component is for the header of the page.
import { Component } from '@angular/core';


@Component({
  selector: 'feeddata',
  templateUrl: './feed.component.html',
  styleUrls: ['./styles.css']

})

export class FeedComponent {

  testcards =
    [
    {title: "How about a hike?", date: "2017-08-03", content: "Cool weather, cloudy skies, beautiful views at Yosemite", saved: false, removed: false},
    {title: "Visit the museum?", date: "2017-08-05", content: "Rainy days don't have to ruin your plans!", saved: false, removed: false},
    {title: "Free concert!", date: "2017-08-01", content: "But it's free", saved: false, removed: false},
    {title: "It's going to snow!", date: "2017-08-04", content: "Let it snow, let it snow", saved: false, removed: false},
    {title: "How about a hike?", date: "2017-08-03", content: "Cool weather, cloudy skies, beautiful views at Yosemite", saved: false, removed: false},
    {title: "Visit the museum?", date: "2017-08-05", content: "Rainy days don't have to ruin your plans!", saved: false, removed: false},
    {title: "Free concert!", date: "2017-08-01", content: "But it's free", saved: false, removed: false},
    {title: "It's going to snow!", date: "2017-08-04", content: "Let it snow, let it snow", saved: false, removed: false}
    ]

  savedcards = [];
  removedcards = [];

  feedinput = "";

  ngOnInit() {
    //sort that JSON list!
    this.testcards.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
    });

    if (document.cookie.length===0){
    this.feedinput = "Hiking in Los Angeles"
    }
    else {this.feedinput = document.cookie}

    for (let i=0; i<this.testcards.length; i++) {
      if (this.testcards[i].saved===true){
        this.savedcards.push(this.testcards[i]);
      }
    }
  }

//NEED TO GET BETTER WAY FOR SAVECARD AND REMOVECARD WHEN I HAVE TIME
  savecard(i: number) {
    //saves a card from the list. The code will add the card to the DB.
    this.testcards[i].saved=!this.testcards[i].saved;
    this.savedcards = [];
    this.removedcards = [];

    for (let i=0; i<this.testcards.length; i++) {
      if (this.testcards[i].saved===true){
        this.savedcards.push(this.testcards[i]);
      }
    }

    for (let i=0; i<this.testcards.length; i++) {
      if (this.testcards[i].removed===true){
        this.removedcards.push(this.testcards[i]);
      }
    }
    //NEED TO ADD http put to DB for updates
  }

  removecard(i: number) {
    //saves a card from the list. The code will add the card to the DB.
    this.testcards[i].saved=false;
    this.testcards[i].removed=true;
    this.savedcards = [];
    this.removedcards = [];

    for (let i=0; i<this.testcards.length; i++) {
      if (this.testcards[i].saved===true){
        this.savedcards.push(this.testcards[i]);
      }
    }

    for (let i=0; i<this.testcards.length; i++) {
      if (this.testcards[i].removed===true){
        this.removedcards.push(this.testcards[i]);
      }
    }
    //NEED TO ADD http put to DB for updates
  }

  feedsubmit() {
    document.cookie = this.feedinput, "; expires=Thu, 5 September 2017 12:00:00 UTC; path=/feed";
  }

}
