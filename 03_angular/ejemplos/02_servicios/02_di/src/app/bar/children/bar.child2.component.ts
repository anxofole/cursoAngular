import { Component } from '@angular/core';
import { AService } from '../../a.service';
import { BService } from '../../b.service';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-bar-child2',
  template: ''
})
export class BarChild2Component {

  constructor(a: AService, b: BService, apiService: ApiService) {
    console.log('xx bar.child2.component', `a: ${a.random}, b: ${b.random}, ApiService: ${apiService.random}`);
  }
}
