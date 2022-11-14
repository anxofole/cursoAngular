import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
  <div [hidden]="!active">
    <ng-content></ng-content>
  </div>
`
})
export class TabComponent {

  @Input()
  public name: string = "";

  @Input()
  public active = false;

}
