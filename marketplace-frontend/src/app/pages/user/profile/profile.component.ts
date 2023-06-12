import { Component } from '@angular/core';
import { BreadCrumb } from 'src/app/shared/schemas/section-header.schema';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

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
      routeName: "Author",
      route: "/Author"
    }
  ]

}
