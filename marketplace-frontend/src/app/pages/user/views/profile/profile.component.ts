import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from 'src/app/shared/schemas/section-header.schema';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as fromApp from 'src/app/core/ngrx/reducers/app.reducer';
import { getUserSelector, isAuthenticatedSelector } from 'src/app/pages/auth/store/auth.selectors';
import { AuthData } from 'src/app/pages/auth/model/auth.model';
import { ItemService } from 'src/app/shared/services/item.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  breadCrumb: BreadCrumb[] = [
    {
      routeName: "Home",
      route: "/"
    },
    {
      routeName: "Author",
      route: "/user/detail"
    }
  ]

  count = 5;

  user: AuthData;
  itemsData: any;

  constructor(
    private store: Store<fromApp.AppState>,
    public activeRoute: ActivatedRoute,
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.store
      .select(getUserSelector)
      .pipe(filter((auth): auth is AuthData => !!auth))
      .subscribe((rp) => {
        this.user = rp;
    });
    this.itemService.getItemsFavorite(this.count).subscribe(
      rp => {
        rp.data.map(i => {
          return {...i, createdBy: {
            _id: this.user._id,
            username: this.user.username,
            email: this.user.email,
          }}
        })
        this.itemsData = rp
      }
    );
  }


}
