import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(private translateService: TranslateService) {}

  public messageTranslated: string = '';
  public nameParam: string = 'John';
  public surnameParam: string = 'Doe';

  switchLang(lang: string) {
    //change language
    this.messageTranslated = 'HELLO_NAME'; // translate message
  }
}
