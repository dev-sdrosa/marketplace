import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FiltersForm } from '../model/shop.model';
import { ItemService } from 'src/app/shared/services/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemCardData } from 'src/app/shared/schemas/item-card.schema';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExploreComponent implements OnInit {

  minPrice = 1;
  maxPrice = 2000;
  filterModel: FiltersForm;

  categoriesData = [];
  itemsData: ItemCardData;

  params = {};
  selectedIndex: number;
  count = 5;

  layout = "list";

  categoriesCollapsed = false;
	pricesCollapsed = false;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.filterModel = new FiltersForm('', 1, 2000);
  }

  ngOnInit(): void {
    this.itemService.getItemCategories().subscribe(
      rp => this.categoriesData = rp.data
    );
    this.activeRoute.queryParams.subscribe( params => {
			this.params = params;
      this.filterModel.categoryId = params['category'];
      this.itemService.getItems(params, this.count).subscribe(
        rp => this.itemsData = rp
      );
		} )
  }

  changeLayout(layout: string) {
    this.layout = layout;
  }

  initializeForm() {
    this.filterModel = new FiltersForm('', 1, 2000);
    this.router.navigate(
      [],
      {
        queryParams: {}, 
      }
    )
  }
 
  applyFilters() {
    const params = {
      category: this.filterModel.categoryId
      // Open to add more params
    }

    return this.router.navigate(
      [], 
      { 
        queryParams: params, 
        queryParamsHandling: 'merge' 
      }
    );
  }

}
