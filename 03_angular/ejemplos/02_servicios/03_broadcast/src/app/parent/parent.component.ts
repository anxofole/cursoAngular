import { Component, OnInit } from '@angular/core';
import { BroadcastService } from '../broadcast.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(
    private broadcastService: BroadcastService
  ) { }

  public count: number = 0;

  ngOnInit(): void {
    this.broadcastService.countSubject.subscribe( (count) => this.count = count);
  }

  public incrementCount(): void {
    this.broadcastService.changeCount(this.count + 1);
    console.log('Parent incremented count');
  }
}
