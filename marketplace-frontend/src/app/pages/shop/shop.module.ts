import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore.component';
import { ShopRoutingModule } from './shop-routing.module';
import {MatSliderModule} from '@angular/material/slider';
import { ItemComponent } from 'src/app/shared/components/item-card/item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemDetailsComponent } from './item-details/item-details.component';

@NgModule({
  declarations: [
    ExploreComponent,
    ItemDetailsComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatSliderModule,
    SharedModule
  ]
})
export class ShopModule { }
