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

@Injectable()
export class InternalInterceptor implements HttpInterceptor {
    constructor(private store: Store<any>) { }

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {

        let key = environment.BACKEND_KEY;
       
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${key}`,
            },
        });

        return next.handle(request);
    }
}
