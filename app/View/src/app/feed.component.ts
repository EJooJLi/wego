//This Component is for the header of the page.
import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'feeddata',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']

})

export class FeedComponent {

  calendarcontent = [
    {Date: (new Date()).setDate((new Date()).getDate()+0), High: 80, Low: 75, Forecast: "Sunny Skies"},
    {Date: (new Date()).setDate((new Date()).getDate()+1), High: 70, Low: 65, Forecast: "Partly Cloudy"},
    {Date: (new Date()).setDate((new Date()).getDate()+2), High: 67, Low: 60, Forecast: "Rain"},
    {Date: (new Date()).setDate((new Date()).getDate()+3), High: 43, Low: 31, Forecast: "Snow Showers"},
    {Date: (new Date()).setDate((new Date()).getDate()+4), High: 78, Low: 72, Forecast: "Scattered Thunderstorms"}
  ];

  calendarimages = [
    "https://d30y9cdsu7xlg0.cloudfront.net/png/74024-200.png",
    "http://www.iconarchive.com/download/i89285/icons8/ios7/Weather-Partly-Cloudy-Day.ico",
    "http://www.iconarchive.com/download/i92064/icons8/windows-8/Weather-Rain.ico",
    "https://maxcdn.icons8.com/Share/icon/Weather//snow1600.png",
    "https://image.flaticon.com/icons/svg/17/17785.svg"
  ];

  feedcards = [
    [{title: "Beach day all day", like: false}, {title: "Good day for a waterpark", like: false}],
    [{title: "Perfect for a hike", like: false}],
    [{title: "Let's visit the museum", like: false}, {title: "Mini-golf is always a good idea", like: false}, {title: "Let's go watch a movie", like: false}],
    [{title: "Do you want to build a snowman?", like: false}],
    [{title: "Mini-golf is always a good idea", like: false}],
  ];

  map = "https://freeiconshop.com/wp-content/uploads/edd/location-map-flat.png";

  weathercolors = [
    "linear-gradient(to bottom, rgb(50, 150, 150) , rgb(75, 200, 200))",
    "linear-gradient(to bottom, rgb(75, 200, 200) , rgb(100, 225, 225))",
    "linear-gradient(to bottom, rgb(100, 225, 225) , rgb(125, 225, 225))",
    "linear-gradient(to bottom, rgb(125, 225, 225) , rgb(150, 250, 250))",
    "linear-gradient(to bottom, rgb(150, 250, 250) , rgb(175, 250, 250))"
  ]

  cardlike(i:number,j:number) {
    this.feedcards[i][j].like = !this.feedcards[i][j].like;
    this.sortcards(i,j);
  }

  sortcards (i:number,j:number) {
    console.log("works");
    if (this.feedcards[i][j].like===true) {
      this.feedcards[i].unshift(this.feedcards[i][j]);
      this.feedcards[i].splice(j+1,1);
    }
    else {
      this.feedcards[i].push(this.feedcards[i][j]);
      this.feedcards[i].splice(j,1);
    }
  }

}
