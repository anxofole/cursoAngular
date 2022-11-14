import { Component, HostBinding, HostListener } from '@angular/core';

const colors = [
  'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
  'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';


  @HostBinding('style.color')
  public color: string | undefined;

  @HostListener('mouseover')
  public newColor() {
    const colorPick = Math.floor(Math.random() * colors.length);

    this.color = colors[colorPick];
  }
}
