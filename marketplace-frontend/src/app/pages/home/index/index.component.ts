import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ItemCardData } from 'src/app/shared/schemas/item-card.schema';
import { ItemCategory } from 'src/app/shared/schemas/item.schema';
import { ItemService } from 'src/app/shared/services/item.service';
import { SocketWebService } from 'src/app/shared/services/socket.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  categories: ItemCategory[] = []
  itemsData: ItemCardData;

  params = {};
  count = 5;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 15,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
  }

  constructor(
    private itemService: ItemService,
    private socketService: SocketWebService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activeRoute.queryParams.subscribe(params => {
      this.params = params;
      this.itemService.getItems(params, this.count).subscribe(
        rp => this.itemsData = rp
      );
    })
  }

  ngOnInit(): void {
    this.itemService.getItemCategories().subscribe(
      rp => {
        this.categories = rp.data;
        // this.socketService.emitEvent(rp.data[0]);
      }
    );
    this.socketService.outEven.subscribe(res => {
      console.log(res)
    })
  }


  routeToShopCategory(id: string) {
    return this.router.navigate(
      ["shop"],
      {
        queryParams: { "category": id }, 
      }
    )
  }



}
