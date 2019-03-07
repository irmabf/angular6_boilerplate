import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routing } from './routing/app.routing';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
