import { Component } from '@angular/core';
import { AService } from '../a.service';
import { BService } from '../b.service';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-foo',
  template: `
    <app-foo-child1></app-foo-child1>
    <app-foo-child1></app-foo-child1>
    <app-foo-child2></app-foo-child2>
    <app-foo-child2></app-foo-child2>
  `,
  providers: [AService]
})
export class FooComponent {

  constructor(a: AService, b: BService, apiService: ApiService) {
    console.log('xx foo.component', `a: ${a.random}, b: ${b.random}, ApiService: ${apiService.random}`);
  }

}
