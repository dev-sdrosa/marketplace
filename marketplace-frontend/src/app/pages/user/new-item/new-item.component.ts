import { Component, OnInit } from '@angular/core';
import { NewItemForm } from 'src/app/shared/model/item-creation.model';
import { BreadCrumb } from 'src/app/shared/schemas/section-header.schema';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {
  newItemForm = new NewItemForm('', '', '', '', undefined)

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

  constructor () {

  }

  ngOnInit(): void {
    
  }
}
