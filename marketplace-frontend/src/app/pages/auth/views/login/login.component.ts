import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from 'src/app/shared/schemas/section-header.schema';
import { LoginForm } from '../../model/auth.model';
import { Store } from '@ngrx/store';

import * as fromApp from 'src/app/core/ngrx/reducers/app.reducer';
import * as AuthActions from '../../../../pages/auth/store/auth.actions';
import { AuthService } from '../../services/auth-service';
import { isAuthenticatedSelector } from '../../store/auth.selectors';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new LoginForm('', '');

  breadCrumb: BreadCrumb[] = [
    {
      routeName: "Home",
      route: "/"
    },
    {
      routeName: "Pages",
      route: "/Pages"
    },
    {
      routeName: "Login",
      route: "/login"
    }
  ]

  constructor(
    private router: Router,
    private store: Store<fromApp.AppState>,
    private authService: AuthService,
  ) {

  }

  ngOnInit(): void {
    this.store
      .select(isAuthenticatedSelector)
      .pipe(
        tap((logged) => {
          if (logged) {
            this.router.navigate(['/']);
          }
        })
      )
      .subscribe();
  }

  login(form: NgForm) {
    if (form.valid) {
      this.store.dispatch(
        new AuthActions.LoginStart({
          email: this.loginForm.email,
          password: this.loginForm.password,
        })
      );
    }
  }

}
