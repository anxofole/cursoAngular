import { Component } from '@angular/core';
import { Info } from '../info';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [`
    .childs {
      display: flex;
      flex-direction: row;
    }
    .childs > * {
      padding: 2rem;
    }
  `]
})
export class ParentComponent {

  public count = 2;

  public info: Info = new Info(4);

  public onCountChange(newCount: number): void {
    this.count = newCount;
  }

  public incrementCount(): void {
    this.count++;
  }

  public changeInfoProperties(): void {
    this.info.sum++;
  }

  public changeInfoObject(): void {
    this.info = new Info(this.info.sum + 1);
  }

}
