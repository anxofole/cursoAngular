import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  public intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const started = Date.now();
    let result: string;
    request = request.clone({
      setHeaders: {
        'X-VERSION': '1'
      }
    });

        return next.handle(request)
        .pipe(
          tap({
            next: (event) => result = event instanceof HttpResponse ? 'succeeded' : '',
            error: _ => result = 'failed',
          }),
          finalize(() => {
            const elapsed = Date.now() - started;
            console.log(`${request.method} "${request.urlWithParams}"
              ${result} in ${elapsed} ms.`);
          }));
  }
}

