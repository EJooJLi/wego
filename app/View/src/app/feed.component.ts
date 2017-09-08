//This Component is for the header of the page.
import { Component } from '@angular/core';


@Component({
  selector: 'feeddata',
  templateUrl: './feed.component.html',
  styleUrls: ['./styles.css']

})

export class FeedComponent {
  //calendar stuff
  today = new Date();
  monthslist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  dayslist = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  date = 0;
  day = 0;
  month = 0;
  year = 0;
  monthcount = 0;
  //number of days in the month
  displaymonth = "";
  displayday = "";
  gap = 0;
  //gets the first day name of the 1st day of a month.
  dates = [];
  activedate = {};
  plandates = [new Date(2017, 9, 3)];
  plans = {};

  todaydate() {
    this.date = this.today.getDate();
    this.day = this.today.getDay();
    this.month = this.today.getMonth();
    this.year = this.today.getFullYear();
    this.refreshcalendar();
  }

  refreshcalendar() {
    this.displaymonth = this.monthslist[this.month];
    this.displayday = this.dayslist[this.day];
    this.gap = new Date(this.year, this.month, 1).getDay();

    this.monthcount = new Date(this.year, this.month+1, 0).getDate();
    this.dates = Array(this.monthcount+1).fill(0).map((x,i)=>i).slice(1,100);
    //the slice is to remove the first zero. probably a better way to do that.
    for (let i=0; i<this.gap; i++) {
      this.dates.unshift(Array(1).fill("-"));
    }
    //the above puts dashes to make sure that the first day aligns with the correct date.
    if (this.month === this.today.getMonth() && this.year ===this.today.getFullYear()) {
      this.activedate={[this.date + this.gap - 1]: true};
    }
    else { this.activedate={[this.date + this.gap - 1]: false} }

    for (let i=0; i<this.plandates.length; i++) {
      if (this.month === this.plandates[i].getMonth()-1) {
        this.plans={[this.plandates[i].getDate() + this.gap -1]: true}
      }
      //else { this.plans={[this.plandates[i].getDate() + this.gap - 1]: false} }
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

  profpic = "https://avatars2.githubusercontent.com/u/18385437?v=4&s=460";

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
