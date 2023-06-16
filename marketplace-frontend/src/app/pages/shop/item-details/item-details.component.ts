import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { History, ItemDetail } from 'src/app/shared/schemas/item-card.schema';
import { BreadCrumb } from 'src/app/shared/schemas/section-header.schema';
import { ItemService } from 'src/app/shared/services/item.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  item: ItemDetail;
  historyRaw: History[];
  // history: any[];
  itemId: string;

  breadCrumb: BreadCrumb[] = [];

  constructor(
    private itemService: ItemService,
    private toastService: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('itemId');

    if (this.itemId) {
      this.itemService.getItem(this.itemId).subscribe(
        rp => {
          this.item = rp.data;
          
          this.breadCrumb = [
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
              route: "/shop/item/" + this.item._id
            }
          ]
        }
      );
      this.itemService.getItemHistory(this.itemId).subscribe(
        rp => {
          this.historyRaw = rp.data;
          // this.processHistory();
        }
      )
    } else {
      this.router.navigate(['/shop']);
    }
  }

  // processHistory() {
  //   let history = this.historyRaw.filter(h => h.item == this.itemId);;

  //   // concat requests in one
  //   for (let h of history) {
  //     this.userService.getUser(h.user).subscribe(
  //       rp => this.history.push(rp.data)
  //     )
  //   }
    
  // }

  addToFavorite() {
    this.itemService.addFavoriteItem(this.item._id).subscribe(
      rp => this.toastService.success('Item added to favorite!'),
      err => this.toastService.warning('Authenticate first')
    )
  }

  buyItem() {
    this.itemService.ownItem(this.itemId).subscribe(
      rp => this.toastService.success('Item owned successfully!'),
      err => this.toastService.warning('Authenticate first')
    )
  }

}
