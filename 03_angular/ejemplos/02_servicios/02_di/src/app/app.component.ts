import { Component } from '@angular/core';
import { AService } from './a.service';
import { BService } from './b.service';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(a: AService, b: BService, apiService: ApiService) {
    console.log('xx app.component', `a: ${a.random}, b: ${b.random}, ApiService: ${apiService.random}`);
  }

}
