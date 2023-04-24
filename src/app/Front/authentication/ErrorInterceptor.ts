import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
                providedIn: 'root'
            })
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        public router: Router)
    { }

    /**
     * intercept all error response
     * @param request
     * @param next
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {

            switch (err.status) {
                case 401:
                case 403:
                    this.router.navigateByUrl('signIn');
                    break;
                case 500:
                    console.error(err);
                    break;
            }

            return throwError(err);
        }))
    }
}