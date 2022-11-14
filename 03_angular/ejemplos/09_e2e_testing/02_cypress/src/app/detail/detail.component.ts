import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input()
  public hero: Hero | null = null;
  @Output()
  public closed = new EventEmitter();

  error: any;
  navigated = false; // true if navigated here

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this.heroService.getHero(id).subscribe(hero => (this.hero = hero!));
      } else {
        this.navigated = false;
        this.hero = new Hero('');
      }
    });
  }

  save(): void {
      this.heroService.save(this.hero!).subscribe({
        next: (hero) => {
        this.hero = hero; // saved hero, w/ id if new
        this.goBack(hero);
      }, error: (error) => (this.error = error)
    }); // TODO: Display error message
  }

  goBack(savedHero: Hero | null = null): void {
    this.closed.emit(savedHero);
    if (this.navigated) {
      window.history.back();
    }
  }
}
