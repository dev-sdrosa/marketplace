import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, CanActivate,
    CanLoad,
    Route, 
    Router, 
    RouterStateSnapshot, 
    UrlSegment
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isAuthenticatedSelector } from '../store/auth.selectors';
import * as fromApp from '../store/auth.reducers';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
    constructor(
        private store: Store<fromApp.AuthState>,
        private router: Router,
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        return this.store.select(isAuthenticatedSelector).pipe(
            tap((isAuthenticated) => {
                if (!isAuthenticated) {
                    this.router.navigate(['/auth/login']);
                }
            })
        );
    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
        return this.store.select(isAuthenticatedSelector).pipe(
            tap((isAuthenticated) => {
                if (!isAuthenticated) {
                    this.router.navigate(['/auth/login']);
                }
            })
        );
    }
}
