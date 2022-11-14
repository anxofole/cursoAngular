import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  public heroes: Hero[] = [];

  public color: string = "";

  ngOnInit(): void {
    this.heroes = [
      new Hero('A'),
      new Hero('B', true),
      new Hero('C'),
    ];
  }

}
