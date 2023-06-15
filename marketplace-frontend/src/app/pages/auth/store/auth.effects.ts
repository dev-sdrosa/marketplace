import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import jwt_decode from "jwt-decode";
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { AuthData } from '../model/auth.model';
import { AuthService } from '../services/auth-service';
import { UserResponse } from '../schemas/user.schemas';


const handleAuthentication = (
    _id: string,
    username: string,
    email: string,
    token: string,
    expiresIn: number
) => {
    const expirationDate = new Date(expiresIn * 1000);
    const user = new AuthData(_id, username, email, token, expirationDate);
    localStorage.setItem('userData', JSON.stringify(user));
    return new AuthActions.AuthenticateSuccess(user, true);
};

const handleError = (errorResponse: HttpErrorResponse) => {
    console.log('Manejando el error..', errorResponse);

    return of(new AuthActions.AuthenticateFail(errorResponse.message));
};


@Injectable()
export class AuthEffects {

    authLogin$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.LOGIN_START),
            switchMap((authData: AuthActions.LoginStart) => {
                return this.authService.login(authData.credentials.email, authData.credentials.password)
                    .pipe(
                        // tap((resp: UserResponse) => {
                        //   const decode: any = jwt_decode(resp.data.token);
                        //   this.authService.startLogoutTimer(decode.exp * 1000)
                        // }),
                        map((resp: UserResponse) => {
                            console.log(resp)
                            if (!resp.success) {
                                this.toastrService.error('Usuario o contraseña incorrecta.');
                                return { type: 'DUMMY' };
                            }
                            const decode: any = jwt_decode(resp.data.token);
                            console.log(resp)
                            return handleAuthentication(resp.data.logedUser._id, resp.data.logedUser.username, resp.data.logedUser.email, resp.data.token, decode.exp);
                        }),
                        catchError((errorResponse: HttpErrorResponse) => {
                            console.log('first', errorResponse);
                            return handleError(errorResponse)
                        })
                    );
            })
        )
    );

    autoLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.AUTO_LOGIN),
      map(() => {
        const userData: {
          _id: string;
          username: string;
          email: string;
          _token: string;
          _tokenExpirationDate: string;
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
          return { type: 'DUMMY' }; 
        }

        const tokenExpirationDate = new Date(userData._tokenExpirationDate);
        const loadedUser = new AuthData(
          userData._id,
          userData.username,
          userData.email,
          userData._token,
          tokenExpirationDate
        );

        if (loadedUser.token) {
          const expirationDuration = tokenExpirationDate.getTime() - new Date().getTime();
          this.authService.startLogoutTimer(expirationDuration);
          return new AuthActions.AuthenticateSuccess(loadedUser, false);
        }

        return { type: 'DUMMY' }; 
      })
    )
  );

    authLogout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.LOGOUT),
            tap(() => {
                this.authService.stopLogoutTimer();
                localStorage.removeItem('userData'); // Remove user data on logout
                this.router.navigate(['/']);
            })
        ),
        { dispatch: false });

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private toastrService: ToastrService) { }
}
