import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  template: `NEW PROFILE
  <button (click)="back()">back</button>`
})
export class NewProfileComponent {

  constructor(private router: Router) { }

  public back(): void {

    this.router.navigate(['../']);

    // this.router.navigateByUrl('profiles');

  }
}
