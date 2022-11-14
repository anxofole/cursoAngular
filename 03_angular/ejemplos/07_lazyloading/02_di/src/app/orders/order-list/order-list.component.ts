import { Component } from '@angular/core';
import { ServiceService } from '../../shared/service.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  constructor(service: ServiceService) { }

}
