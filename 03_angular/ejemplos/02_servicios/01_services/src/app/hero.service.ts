import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroList: Hero[] = [new Hero('A'), new Hero('B'), new Hero('C')];

  constructor() {}

  public getHeroes() {
    return this.heroList;
  }
}
