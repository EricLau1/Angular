import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// add manualmente
// install toastr: 
// npm install ng6-toastr-notifications --save
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // add manualemente
    ToastrModule.forRoot() // add manualmente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
