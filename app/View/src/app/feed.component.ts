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
    {title: "How about a hike?", date: "2017-08-03", content: "Cool weather, cloudy skies, beautiful views at Yosemite"},
    {title: "Visit the museum?", date: "2017-08-05", content: "Rainy days don't have to ruin your plans!"},
    {title: "Free concert!", date: "2017-08-01", content: "But it's free"},
    {title: "It's going to snow!", date: "2017-08-04", content: "Let it snow, let it snow"}
    ]

  savedcards = [];

  ngOnInit() {
    //sort that JSON list!
    this.testcards.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
    });
  }

  savecard(i: number) {
    //saves a card from the list. The code will add the card to the DB.
    this.savedcards.push(this.testcards[i]);
    console.log(this.savedcards);
    this.testcards.splice(i,1);
  }


}
