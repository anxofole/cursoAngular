import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AppConfig, APP_CONFIG_TOKEN } from '../app.config';
import { LogsService } from '../dashboard/logs/logs.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  public get endpoint(){
   // return 'http://localhost:8000/users'; //cambiar por configuracion
   return `${this.config.endpoint}/users`;
  }

  constructor(
    @Inject(APP_CONFIG_TOKEN) private config: AppConfig,
    private logsService: LogsService,
    private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public login(username: string, password: string): Observable<User> {
    return this.http.post<any>(`${this.endpoint}/authenticate`, { username, password })
      .pipe(map((user: User) => {
        console.log(user);
        //login successful if there's a jwt token in the response
        if (user && user.token) {
          this.logsService.add(`User [${user.username}] logged in`);
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  public logout(): void {
    console.log('Logged out');
    if (this.currentUserValue) {
      this.logsService.add(`User [${this.currentUserValue.username}] logged out`);
    }

    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null as unknown as User);
  }
}
