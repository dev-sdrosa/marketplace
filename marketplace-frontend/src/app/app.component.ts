import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AuthActions from '../app/pages/auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
		public store: Store<any>,
	) {}

  ngOnInit() {
    this.store.dispatch(new AuthActions.AutoLogin());
  }
}
