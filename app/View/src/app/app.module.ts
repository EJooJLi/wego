import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [],
  bootstrap: [HeaderComponent, AppComponent]
})
export class AppModule { }
