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
    {title: "Free concert!", date: "2017-08-01", content: "But it's free"}
    ]


  ngOnInit() {
    //sort that JSON list!
    this.testcards.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
    });
  }

}
