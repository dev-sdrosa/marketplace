import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getTokenSelector } from '../store/auth.selectors';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private store: Store<any>) { }

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {

        let token: string = null;
        this.store.select(getTokenSelector).subscribe(x => token = x);

        if (!request.headers.get('skip')) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } else {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${environment.BACKEND_KEY}`,
                },
            });
        }

        return next.handle(request);
    }

}
