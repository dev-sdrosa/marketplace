import { Component } from '@angular/core';
import { BreadCrumb } from 'src/app/shared/schemas/section-header.schema';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent {
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
      routeName: "Create Item",
      route: "/new-item"
    }
  ]
}
