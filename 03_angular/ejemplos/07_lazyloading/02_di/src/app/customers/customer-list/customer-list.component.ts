import { Component } from '@angular/core';
import { ServiceService } from '../../shared/service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  constructor(service: ServiceService) { }

}
