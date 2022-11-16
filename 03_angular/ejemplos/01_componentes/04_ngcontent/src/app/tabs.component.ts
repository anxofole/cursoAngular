import {
  Component,
  QueryList,
  AfterContentInit,
  ContentChildren,
} from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tabs',
  template: `
    <ul>
      <li
        *ngFor="let tab of tabs"
        (click)="selectTab(tab)"
        [class.active]="tab.active"
      >
        {{ tab.name }}
      </li>
    </ul>
    <ng-content></ng-content>
  `,
  styles: [
    `
      .active {
        font-weight: bold;
      }
    `,
  ],
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent)
  public tabs: QueryList<TabComponent> = new QueryList<TabComponent>();

  public ngAfterContentInit(): void {
    const activeTab = this.tabs.find((tab: any) => tab.active);

    if (activeTab) {
      this.selectTab(activeTab);
    } else {
      this.selectTab(this.tabs.first);
    }
  }

  public selectTab(tab: TabComponent): void {
    const activeTab = this.tabs.find((t) => t.active);

    if (activeTab) {
      activeTab.active = false;
    }

    tab.active = true;
  }
}
