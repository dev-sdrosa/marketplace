import { Component, Input, OnInit } from '@angular/core';
import { ItemCard } from '../../schemas/item-card.schema';
import { ItemService } from '../../services/item.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item-card',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

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
	
}
