import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html'
})

export class HeroFormComponent {

  public model = new Hero();

  onSubmit(): void {
    console.log(this.model);
  }

}
