import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroListComponent } from './heroes/hero-list.component';
import { PatataComponent } from './patata/patata.component';

@NgModule({
  declarations: [AppComponent, HeroListComponent, PatataComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
