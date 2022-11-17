import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Person } from 'src/models/person';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent implements OnInit {
  constructor() {}

  @Input()
  public person: Person | null = null;

  @Output()
  public closed = new EventEmitter<void>();

  @Output()
  public enabledChanged = new EventEmitter<void>();

  public close(): void {
    this.closed.emit();
  }

  public changeEnabled(): void {
    this.enabledChanged.emit();
  }

  ngOnInit(): void {}
}
