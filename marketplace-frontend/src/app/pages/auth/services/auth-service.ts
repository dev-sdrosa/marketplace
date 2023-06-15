import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as AuthActions from '../store/auth.actions';
import * as fromApp from '../store/auth.reducers';
import { RegisterUserResponse, UserResponse } from '../schemas/user.schemas';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private tokenExpirationTimer: ReturnType<typeof setTimeout> | null;

    constructor(
        private store: Store<fromApp.AuthState>,
        private http: HttpClient
    ) { }

    public login(email: string, password: string): Observable<UserResponse> {
        const body = {
            username: email,
            password: password
        }

        return this.http.post<UserResponse>(`${'api/signin'}`, body, { headers: {skip: "true"} });
    }

    public register(
        username: string,
        email: string,
        password: string
    ): Observable<RegisterUserResponse> {
        const body = {
            username: username,
            email: email,
            password: password
        }

        return this.http.post<RegisterUserResponse>(`${'api/signup'}`, body, { headers: {skip: "true"} });
    }

    startLogoutTimer(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.store.dispatch(new AuthActions.Logout());
        }, expirationDuration);
    }

    stopLogoutTimer() {
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
            this.tokenExpirationTimer = null;
        }
    }

}
