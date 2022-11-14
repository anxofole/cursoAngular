import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public get logged(): boolean {
    return this.loginService.logged;
  }

  constructor(
    private loginService: LoginService) { }

  public login(): void {
    this.loginService.login();
  }

}
