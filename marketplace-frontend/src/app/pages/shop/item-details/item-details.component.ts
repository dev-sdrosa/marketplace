import { Component } from '@angular/core';
import { BreadCrumb } from 'src/app/shared/schemas/section-header.schema';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {

  breadCrumb: BreadCrumb[] = [
    {
      routeName: "Home",
      route: "/"
    },
    {
      routeName: "Shop",
      route: "/shop"
    },
    {
      routeName: "Item Details 1",
      route: "/shop/items/items-details-1"
    }
  ]

}
