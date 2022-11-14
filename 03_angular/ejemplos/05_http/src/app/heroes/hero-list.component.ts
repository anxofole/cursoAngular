import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Hero } from './hero';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit, OnDestroy {

  public heroes: Hero[] = [];
  private addSub: Subscription | undefined;
  private getAllSub: Subscription | undefined;
  private deleteSub: Subscription | undefined;

  constructor(
    private heroesService: HeroesService) { }

  public ngOnInit(): void {
    this.getAllSub = this.heroesService.getAll()
      .subscribe((heroes: Hero[]) => {
        this.heroes = heroes;
      });
  }

  public ngOnDestroy(): void {
    this.addSub?.unsubscribe();
    this.getAllSub?.unsubscribe();
    this.deleteSub?.unsubscribe();
  }

  public add(): void {
    const newHero: Hero = {
      id: 2,
      name: 'new Hero'
    };

    this.addSub = this.heroesService.create(newHero)
      .subscribe({
        next: (hero: Hero) => {
          this.heroes.push(hero);
        },
        error: (error) => alert(error)
      });
  }

  public delete(hero: Hero): void {
    this.deleteSub = this.heroesService.delete(hero)
      .subscribe(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
      });
  }

}
