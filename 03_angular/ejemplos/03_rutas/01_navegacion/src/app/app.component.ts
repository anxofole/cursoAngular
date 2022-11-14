import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) { }

  public ngOnInit(): void {

    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        console.log('starts =>', e.url);
      }
      if (e instanceof NavigationEnd) {
        console.log('ends =>', e.url);
      }
    });

  }
}
