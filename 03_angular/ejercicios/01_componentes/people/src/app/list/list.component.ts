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
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  constructor() {}

  @Input()
  public people: Person[] = [];

  @Output()
  public personSelected = new EventEmitter<Person>();

  public selectPerson(person: Person): void {
    this.personSelected.emit(person);
  }
  ngOnInit(): void {}
}
