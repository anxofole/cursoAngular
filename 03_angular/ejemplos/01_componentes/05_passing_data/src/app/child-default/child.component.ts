import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Info } from '../info';

@Component({
  selector: 'app-child-default',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChildDefaultComponent {

  @Input() count: number = 0;
  @Input() info: Info | undefined;
  @Output() result = new EventEmitter<number>();

  public incrementCount(): void {
    this.count++;
    this.result.emit(this.count);
  }
}


