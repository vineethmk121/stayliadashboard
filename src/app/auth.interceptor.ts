import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _router: Router, private http: HttpClient) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('data');
    if (token) {
      req = req.clone({
        headers: req.headers.set(
          'Authorization', ('Bearer ' + JSON.parse(String(token)).token)
        )
      });

    }
    return next.handle(req);
  }
}
