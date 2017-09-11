//This Component is for the header of the page.
import { Component } from '@angular/core';


@Component({
  selector: 'feeddata',
  templateUrl: './feed.component.html',
  styleUrls: ['./styles.css']

})

export class FeedComponent {
  profpic = "https://avatars2.githubusercontent.com/u/18385437?v=4&s=460";

//***********CARD STUFF BEGINS*****************

  testcards =
    [
    {title: "How about a hike?", date: "2017-09-03", content: "Cool weather, cloudy skies, beautiful views at Yosemite", saved: false, removed: false},
    {title: "Visit the museum?", date: "2017-09-15", content: "Rainy days don't have to ruin your plans!", saved: false, removed: false},
    {title: "Free concert!", date: "2017-09-10", content: "But it's free", saved: false, removed: false},
    {title: "It's going to snow!", date: "2017-09-22", content: "Let it snow, let it snow", saved: false, removed: false},
    {title: "How about a hike?", date: "2017-10-03", content: "Cool weather, cloudy skies, beautiful views at Yosemite", saved: false, removed: false},
    {title: "Visit the museum?", date: "2017-10-05", content: "Rainy days don't have to ruin your plans!", saved: false, removed: false},
    {title: "Free concert!", date: "2017-10-01", content: "But it's free", saved: false, removed: false},
    {title: "It's going to snow!", date: "2017-10-04", content: "Let it snow, let it snow", saved: false, removed: false}
  ] //cards that will be from the DB&API based on preferences

  savedcards = []; //user saved cards
  removedcards = []; //user removed cards
  feedinput = "Los Angeles Activities"; //initial input based on user location data

  ngOnInit() {
    this.todaysdate();
    this.sortcards();
    this.makesavedcardlist();
  }

  //sort the cards that are sent from DB
  sortcards () {
    this.testcards.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
    });
  }

  //push saved cards into separate save card list
  makesavedcardlist () {
    for (let i=0; i<this.testcards.length; i++) {
      if (this.testcards[i].saved===true){
        this.savedcards.push(this.testcards[i]);
      }
    }
  }

  //saves card from
  savecard (i: number) {
    this.testcards[i].saved=!this.testcards[i].saved;
    this.cardchange();
  }

  //removes card from feed view
  removecard (i: number) {
    this.testcards[i].removed=true;
    this.testcards[i].saved=false;
    this.cardchange();
  }

  //edits card to reflect saved/remove status
  cardchange () {
    this.savedcards = [];
    this.removedcards = [];
    for (let i=0; i<this.testcards.length; i++) {
      if (this.testcards[i].saved===true) {
        this.savedcards.push(this.testcards[i]);
      }
    }
    this.refreshcalendar();
  }

  //
  // feedsubmit() {
  //   document.cookie = this.feedinput, "; expires=Thu, 5 September 2017 12:00:00 UTC; path=/feed";
  // }
//***********************CARD STUFF ENDS**********************
//***********************CALENDAR STUFF***********************

  today = new Date(); //js function to get today's date
  dayslist = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  firstdate; //full displayed date
  date; //numerical day (1-31)
  month; //month  (0-11 for Jan to Dec)
  year; //numerical year
  daycount; //number of days in the month
  gap; //number value used to get the actual day that the 1st of a month starts at.
  dates; //array of dates in a given month (1-28/29/30/31)
  activedate; //current date that is highlighed on the calendar
  plans = {}; //array that will have the dates for the plans
  upcomingplans = [];

    //goes to today's date in the calendar
  todaysdate() {
    this.firstdate = new Date(this.today.getFullYear(), this.today.getMonth(), 1); //first day of the month
    this.date = this.today.getDate();
    this.month = this.today.getMonth();
    this.year = this.today.getFullYear();
    this.refreshcalendar();
  }

  refreshcalendar() {
    //updates the calendar view
    this.gap = this.firstdate.getDay();
    this.daycount = new Date(this.year, this.month+1, 0).getDate();
    this.dates = Array(this.daycount+1).fill(0).map((x,i)=>i).slice(1,32);
    //shifts the 1st day of each month forward to match the day it aligns with. Fills in with dashes.
    for (let i=0; i<this.gap; i++) {
      this.dates.unshift(Array(1).fill("-"));
    }

    this.activedatefxn ();
    this.plansfxn();
    this.upcomingplansfxn();
  }

//sets the active/current date on the calendar so it can be highlighted
  activedatefxn () {
    if (this.month === this.today.getMonth() && this.year === this.today.getFullYear()) {
      this.activedate={[this.date + this.gap - 1]: true};
    }
    else { this.activedate={} }
  }

//fxn that allows the HTML to highlight the dates with saved plans
  plansfxn () {
    this.plans = [];

    for (let i=0; i<this.savedcards.length; i++) {
      let sdate = new Date(this.savedcards[i].date);
      sdate = new Date(sdate.getFullYear(), sdate.getMonth(), sdate.getDate()+1);
      if (sdate.getFullYear() === this.year && sdate.getMonth() === this.month) {
        this.plans[sdate.getDate()+this.gap-1]= true;
      }
    }
  }

//fxn that fills in the array of upcoming plans with only saved plans that are in the future.
//probably unnecessary since old saved plans should be deleted.
  upcomingplansfxn () {
    this.upcomingplans=[];
    //specplans is refreshed
    for (let i=0; i<this.savedcards.length; i++){
      let sdate = new Date(this.savedcards[i].date);
      sdate = new Date(sdate.getFullYear(), sdate.getMonth(), sdate.getDate()+1);
      if (sdate.getTime() >= this.today.getTime()) {
        this.upcomingplans.push(this.savedcards[i]);
      }
    }
  }

//this shows the saved cards ONLY for the clicked date
  dateclick (i: number) {
    this.upcomingplans = [];
    for (let j=0; j<this.savedcards.length; j++) {
      let sdate = new Date(this.savedcards[j].date);
      sdate = new Date(sdate.getFullYear(), sdate.getMonth(), sdate.getDate()+1);
      let plandate = new Date(this.year, this.month, i-this.gap+1);

      if (plandate.getTime() === sdate.getTime()) {
        this.upcomingplans.push(this.savedcards[j]);
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
    this.firstdate = new Date(this.year, this.month, 1);
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
    this.firstdate = new Date(this.year, this.month, 1);
    this.refreshcalendar();
  }

//*****************END CALENDAR STUFF********************
//*****************BEGIN WEATHER STUFF*******************

  //information will be coming from API/DB
  todayweather = {High: 75, Low: 65, Forecast: "Cloudy"};
  location = "San Francisco, CA";

  

}
