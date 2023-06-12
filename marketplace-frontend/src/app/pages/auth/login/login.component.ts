import { Component } from '@angular/core';
import { BreadCrumb } from 'src/app/shared/schemas/section-header.schema';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

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

}
