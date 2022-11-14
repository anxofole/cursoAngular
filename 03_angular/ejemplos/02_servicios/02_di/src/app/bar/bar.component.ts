import { Component } from '@angular/core';
import { AService } from '../a.service';
import { BService } from '../b.service';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-bar',
  template: `
    <app-bar-child1></app-bar-child1>
    <app-bar-child1></app-bar-child1>
    <app-bar-child2></app-bar-child2>
    <app-bar-child2></app-bar-child2>
  `
})
export class BarComponent {

  constructor(a: AService, b: BService, apiService: ApiService) {
    console.log('xx bar.component', `a: ${a.random}, b: ${b.random}, ApiService: ${apiService.random}`);
  }
}
