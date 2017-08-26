//This Component is for the header of the page.
import { Component } from '@angular/core';


@Component({
  selector: 'feeddata',
  templateUrl: './feed.component.html',
  styleUrls: ['./styles.css']

})

export class FeedComponent {

  testcards =
    {
    0: {title: "How about a hike?", date: "2017-08-03", content: "Cool weather, cloudy skies, beautiful views at Yosemite"},
    2: {title: "Visit the museum?", date: "2017-08-05", content: "Rainy days don't have to ruin your plans!"},
    1: {title: "Free concert!", date: "2017-08-01", content: "But it's free"}
    }



  titles=[];
  dates=[];
  contents=[];

//this breaks apart the JSON into arrays that angular can use to make the cards
  ngOnInit() {
    for (let i=0; i<Object.keys(this.testcards).length; i++) {
      this.titles[i]=this.testcards[i].title;
      this.dates[i]=this.testcards[i].date;
      this.contents[i]=this.testcards[i].content;
    }
  }


}
