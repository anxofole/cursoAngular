import { Component } from '@angular/core';
import { AService } from '../../a.service';
import { BService } from '../../b.service';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-foo-child1',
  template: ''
})
export class FooChild1Component {

  constructor(a: AService, b: BService, apiService: ApiService) {
    console.log('xx foo.child1.component', `a: ${a.random}, b: ${b.random}, ApiService: ${apiService.random}`);
  }
}
