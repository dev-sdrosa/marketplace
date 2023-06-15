import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as fromApp from 'src/app/core/ngrx/reducers/app.reducer';
import * as AuthActions from 'src/app/pages/auth/store/auth.actions';
import { getUserSelector, isAuthenticatedSelector } from 'src/app/pages/auth/store/auth.selectors';
import { AuthData } from 'src/app/pages/auth/model/auth.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isAuthenticated$: Observable<boolean>;
  userId: string;
  username: string;

  constructor(
    private store: Store<fromApp.AppState>,
    public activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(isAuthenticatedSelector);
    this.store
      .select(getUserSelector)
      .pipe(filter((auth): auth is AuthData => !!auth))
      .subscribe((rp) => {
        console.log(rp);
        this.userId = rp._id;
        this.username = rp.username;
      });
  }

  onLogout(event: Event) {
    event.preventDefault();
    this.store.dispatch(new AuthActions.Logout());
  }
}
