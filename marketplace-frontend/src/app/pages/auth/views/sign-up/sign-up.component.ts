import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from 'src/app/shared/schemas/section-header.schema';
import { RegisterForm } from '../../model/auth.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import * as fromApp from 'src/app/core/ngrx/reducers/app.reducer';
import { AuthService } from '../../services/auth-service';
import { isAuthenticatedSelector } from '../../store/auth.selectors';
import { tap } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerForm = new RegisterForm('', '', '', '');

  breadCrumb: BreadCrumb[] = [
    {
      routeName: "Home",
      route: "/"
    },
    {
      routeName: "Sign Up",
      route: "/auth/signup"
    }
  ]

  constructor(
    private router: Router,
    private store: Store<fromApp.AppState>,
    private authService: AuthService,
    private toastService: ToastrService
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

  register(form: NgForm) {
    if (form.valid) {
      this.authService.register(
        this.registerForm.username,
        this.registerForm.email,
        this.registerForm.password1,
      ).subscribe(
        rp => {
          this.router.navigate(["auth/login"]).then(
            () => this.toastService.success("User created successfully! Proceed to login")
          )
        },
        (err: HttpErrorResponse) => {
          if (err.status == 400) {
            this.toastService.warning(err.error.message)
          }
        }
      )
    }
  }

}
