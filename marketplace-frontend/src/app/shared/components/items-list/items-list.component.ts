import { Component, Input, OnInit } from '@angular/core';
import { ItemCardData } from '../../schemas/item-card.schema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: 'items-list.component.html',
  styleUrls: ['items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  @Input({required: true})
  itemsData: ItemCardData;

  @Input()
  count = 5;

  @Input()
  layout = 'grid';

  constructor(
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    console.log(this.layout)
  }

  changePageSize() {
    this.count += 5;

    if (this.count > this.itemsData.total) {
      this.count = this.itemsData.total;
    }

		return this.router.navigate(
      [], 
      { 
        queryParams: { count: this.count }, 
        queryParamsHandling: 'merge' 
      }
    );
	}

}
