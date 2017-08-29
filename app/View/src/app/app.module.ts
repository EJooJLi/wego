import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NavBarComponent } from './navbar.component';
import { ProfileComponent } from './profile.component';
import { FeedComponent } from './feed.component'
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'find', redirectTo: 'search'},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'feed', component: FeedComponent},
  // {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    NavBarComponent,
    ProfileComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: false}), //<-- for routing
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavBarComponent]
})
export class AppModule { }
