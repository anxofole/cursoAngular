import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[] = [];
  public selectedHero: Hero | null = null;
  public addingHero = false;
  public error: any;

  constructor(private router: Router, private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().subscribe({
      next: (heroes) => (this.heroes = heroes),
      error: (error) => (this.error = error),
    });
  }

  addHero(): void {
    this.addingHero = true;
    this.selectedHero = null;
  }

  closed(savedHero: Hero): void {
    this.addingHero = false;
    if (savedHero) {
      this.getHeroes();
    }
  }

  deleteHero(hero: Hero, event: any): void {
    event.stopPropagation();
    this.heroService.delete(hero).subscribe({
      next: (res) => {
        this.heroes = this.heroes.filter((h) => h !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      },
      error: (error) => (this.error = error),
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.addingHero = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero!.id]);
  }
}
