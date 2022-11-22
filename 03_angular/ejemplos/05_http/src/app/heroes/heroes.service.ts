import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Hero } from './hero';

import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

const API_URL = 'http://localhost:3000/heroes';

@Injectable()
export class HeroesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(API_URL);
  }

  create(hero: Hero): Observable<Hero> {
    return this.http
      .post<Hero>(API_URL, hero)
      .pipe(catchError(this.handleError));
  }

  delete(hero: Hero): Observable<number> {
    return this.http.delete(`${API_URL}/${hero.id}`).pipe(map((_) => hero.id));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(error);
    return throwError('Something bad happened; please try again later.');
  }
}
