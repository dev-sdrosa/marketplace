import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore/explore.component';
import { ShopRoutingModule } from './shop-routing.module';
import {MatSliderModule} from '@angular/material/slider';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
    ExploreComponent,
    ItemDetailsComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatSliderModule,
    NgbModule,
    NgbCollapseModule,
    SharedModule,
  ]
})
export class ShopModule { }
