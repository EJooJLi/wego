import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './signup.component';
import { SignInComponent } from './signin.component';
import { NavBarComponent } from './navbar.component';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'find', redirectTo: 'search'},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    SignUpComponent,
    SignInComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true}) //<-- for routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
