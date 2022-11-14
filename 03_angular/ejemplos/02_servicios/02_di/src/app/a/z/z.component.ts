import { Component, OnInit } from '@angular/core';
import { AService } from '../../a.service';
import { BService } from '../../b.service';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-z',
  templateUrl: './z.component.html',
  styleUrls: ['./z.component.css']
})
export class ZComponent {

  constructor(a: AService, b: BService, apiService: ApiService) {
    console.log('xx a module.z.component', `a: ${a.random}, b: ${b.random}, ApiService: ${apiService.random}`);
  }

}
