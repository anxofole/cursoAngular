import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
})
export class HeroListComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(public heroesService: HeroService) {}

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }
}
