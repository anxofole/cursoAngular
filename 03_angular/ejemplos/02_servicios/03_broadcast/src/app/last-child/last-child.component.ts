import { Component, OnInit } from '@angular/core';
import { BroadcastService } from '../broadcast.service';

@Component({
  selector: 'app-last-child',
  templateUrl: './last-child.component.html',
  styleUrls: ['./last-child.component.scss']
})
export class LastChildComponent implements OnInit {

  constructor(
    private broadcastService: BroadcastService
  ) { }

  ngOnInit(): void {
    this.broadcastService.countSubject.subscribe( (count) => this.count = count);
  }

  public count: number = 0;

  public incrementCount(): void {
    this.broadcastService.changeCount(this.count + 1);
    console.log('Child incremented count');
  }

}
