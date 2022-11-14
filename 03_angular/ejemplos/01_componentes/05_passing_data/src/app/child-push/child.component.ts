import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Info } from '../info';

@Component({
  selector: 'app-child-push',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildPushComponent {

  @Input() count: number = 0;
  @Input() info: Info | undefined;
  @Output() result = new EventEmitter<number>();

  public incrementCount(): void {
    this.count++;
    this.result.emit(this.count);
  }
}


