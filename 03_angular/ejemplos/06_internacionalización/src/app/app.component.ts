import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'internacionalizacion';
  constructor(private translateService: TranslateService) {
    translateService.addLangs(['es', 'en']);
    translateService.setDefaultLang('es');
  }
}
