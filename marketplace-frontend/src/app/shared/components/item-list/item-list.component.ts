import { Component, Input } from '@angular/core';
import { ItemCard } from '../../schemas/item-card.schema';
import { ItemService } from '../../services/item.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {

  @Input()
	item: ItemCard;

  constructor(
    private itemService: ItemService,
    private toastService: ToastrService
  ) {

  }

  ngOnInit(): void {

  }

  addToFavorite() {
    this.itemService.addFavoriteItem(this.item._id).subscribe(
      rp => this.toastService.success('Item added to favorite!'),
      err => this.toastService.warning('Authenticate first')
    )
  }

  buyItem() {
    this.itemService.ownItem(this.item._id).subscribe(
      rp => this.toastService.success('Item owned successfully!'),
      err => this.toastService.warning('Authenticate first')
    )
  }

}
