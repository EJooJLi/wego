//This Component is for the header of the page.
import { Component } from '@angular/core';


@Component({
  selector: 'feeddata',
  templateUrl: './feed.component.html',
  styleUrls: ['./styles.css']

})

export class FeedComponent {
  profpic = "https://avatars2.githubusercontent.com/u/18385437?v=4&s=460";

  testcards =
    [
    {title: "How about a hike?", date: "2017-09-03", content: "Cool weather, cloudy skies, beautiful views at Yosemite", saved: false, removed: false},
    {title: "Visit the museum?", date: "2017-09-05", content: "Rainy days don't have to ruin your plans!", saved: false, removed: false},
    {title: "Free concert!", date: "2017-09-01", content: "But it's free", saved: false, removed: false},
    {title: "It's going to snow!", date: "2017-09-04", content: "Let it snow, let it snow", saved: false, removed: false},
    {title: "How about a hike?", date: "2017-09-03", content: "Cool weather, cloudy skies, beautiful views at Yosemite", saved: false, removed: false},
    {title: "Visit the museum?", date: "2017-09-05", content: "Rainy days don't have to ruin your plans!", saved: false, removed: false},
    {title: "Free concert!", date: "2017-09-01", content: "But it's free", saved: false, removed: false},
    {title: "It's going to snow!", date: "2017-09-04", content: "Let it snow, let it snow", saved: false, removed: false}
    ]

  savedcards = [];
  removedcards = [];

  feedinput;

  ngOnInit() {
    this.todaydate();
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

  this.refreshcalendar ();
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
    this.refreshcalendar();
  }

  feedsubmit() {
    document.cookie = this.feedinput, "; expires=Thu, 5 September 2017 12:00:00 UTC; path=/feed";
  }
  //***********************CALENDAR STUFF***********************

  today = new Date(); //js function to get today's date
  monthslist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  dayslist = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  date; //numerical day (1-31)
  day; //day (0-6 for Sunday through Saturday)
  month; //month  (0-11 for Jan to Dec)
  year; //numerical year
  daycount; //number of days in the month
  displaymonth; //name of the month
  displayday; //name of the day
  gap; //number value used to get the actual day that the 1st of a month starts at.
  dates; //array of dates in a given month (1-28/29/30/31)
  activedate; //current date that is highlighed on the calendar
  plans = {}; //array that will have the dates for the plans

  todaydate() {
    //this fxn takes you to the current month view
    this.date = this.today.getDate();
    this.day = this.today.getDay();
    this.month = this.today.getMonth();
    this.year = this.today.getFullYear();
    this.refreshcalendar();
  }

  refreshcalendar() {
    //updates the calendar view
    this.displaymonth = this.monthslist[this.month];
    this.displayday = this.dayslist[this.day];
    //this gets the day of the 1st of a month
    this.gap = new Date(this.year, this.month, 1).getDay();
    this.daycount = new Date(this.year, this.month+1, 0).getDate();
    //this gets an array containing the dates starting from 0 for a month.
    //the slice gets the 2nd digit ("0" is the 1st digit) until the 32nd digit
    //because we don't want a zero in the calendar.
    this.dates = Array(this.daycount+1).fill(0).map((x,i)=>i).slice(1,32);
    //puts dashes to make sure that the 1st aligns with the correct day
    for (let i=0; i<this.gap; i++) {
      this.dates.unshift(Array(1).fill("-"));
    }
    //if the display month and year are equal to the current month and year, then
    //activedate will equal the numerical date plus the gap minus 1 (b.c js counts from zero)
    //and the value in activedate will be set to true. This will trigger a style change in the HTML
    if (this.month === this.today.getMonth() && this.year === this.today.getFullYear()) {
      this.activedate={[this.date + this.gap - 1]: true};
    }
    //else, the array is empty
    else { this.activedate={} }
    //for each date in plandates array, if the display month and year match those of
    //the plandates, then insert the date with a value of true in the plans array.
    //this triggers a style change in the HTML for those dates.
    this.plans = [];

    for (let i=0; i<this.savedcards.length; i++) {
      let sdate = new Date(this.savedcards[i].date);
      let date = new Date(sdate.getFullYear(), sdate.getMonth(), sdate.getDate()+1);
      if (date.getFullYear() === this.today.getFullYear() && date.getMonth() === this.today.getMonth()) {
        this.plans[date.getDate()+this.gap-1]= true;
      }
    }
  }

  nextmonth() {
    if (this.month===11) {
      this.year+=1;
      this.month=0;
    }
    else {
    this.month+= 1;
    }
    this.refreshcalendar();
  }

  prevmonth() {
    if (this.month===0) {
      this.year-=1;
      this.month=11;
    }
    else {
    this.month -=1;
    }
    this.refreshcalendar();
  }

  //end calendar stuff

}
