import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(private translateService: TranslateService) {}

  public messageTranslated: string = '';
  public nameParam: string = 'John';
  public surnameParam: string = 'Doe';

  ngOnInit() {}

  switchLang(lang: string) {
    //change language
    this.translateService.use(lang);
  }

  translateInstant() {
    //change language
    this.messageTranslated = this.translateService.instant('HELLO_NAME', {
      name: this.nameParam,
      surname: this.surnameParam,
    }); // translate message
  }
}
