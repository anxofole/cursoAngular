import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Hero } from './hero';

const API_URL = 'http://localhost:3000/heroes';

@Injectable()
export class HeroService {

  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http
      .get<Hero[]>(API_URL)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getHero(id: number): Observable<Hero | undefined> {
    return this.getHeroes().pipe(
      map(heroes => heroes.find(hero => hero.id === id))
    );
  }

  save(hero: Hero) {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }

  delete(hero: Hero) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${API_URL}/${hero.id}`;

    return this.http.delete<Hero>(url).pipe(catchError(this.handleError));
  }

  // Add new Hero
  private post(hero: Hero) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Hero>(API_URL, hero)
      .pipe(catchError(this.handleError));
  }

  // Update existing Hero
  private put(hero: Hero) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${API_URL}/${hero.id}`;

    return this.http.put<Hero>(url, hero).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    const error = new Error(res.error || 'Server error');
    return throwError(() => error);
  }
}
