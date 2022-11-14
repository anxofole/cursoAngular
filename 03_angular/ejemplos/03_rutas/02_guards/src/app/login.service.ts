export class LoginService {

  public logged: boolean = false;

  public login(): void {
    this.logged = true;
  }

}
