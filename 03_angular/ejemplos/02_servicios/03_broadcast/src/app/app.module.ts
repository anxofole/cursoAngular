import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { MiddleChildComponent } from './middle-child/middle-child.component';
import { LastChildComponent } from './last-child/last-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    MiddleChildComponent,
    LastChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
