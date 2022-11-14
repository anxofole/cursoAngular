import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {
  public heroes: Hero[] = [];

  ngOnInit(): void {
    this.heroes = [
      new Hero('A'),
      new Hero('B'),
      new Hero('C'),
    ];
  }
}
