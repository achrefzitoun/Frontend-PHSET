import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';


import {Observable} from 'rxjs';

@Injectable({
                providedIn: 'root'
            })
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    /**
     * intercept all request and set the token in the header
     * @param request : request who will be sent to the server
     * @param next
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        const bearer = 'Bearer '+localStorage.getItem('authToken');

            request = request.clone({
                                        setHeaders: {
                                            Authorization: bearer
                                        }
                                    });


        return next.handle(request);
    }
}