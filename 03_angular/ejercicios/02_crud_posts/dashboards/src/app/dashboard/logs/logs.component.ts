import { Component, OnInit } from '@angular/core';
import { LogsService } from './logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  public logs!: string[];

  constructor(private logsService: LogsService) { }

  ngOnInit(): void {
    this.logs = this.logsService.getAll();
  }

}
