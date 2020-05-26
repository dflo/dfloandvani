import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { detectIE } from '../helpers/detect-browser';

@Injectable()
export class BaseHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (detectIE()) {
      let header = req.headers;
      header = header.append('Cache-Control', 'no-cache');
      header = header.append('Pragma', 'no-cache');
      header = header.append('Expires', 'Sat, 01 Jan 2000 00:00:00 GMT');
      req = req.clone({ headers: header });
    }

    return next.handle(req);
  }
}
