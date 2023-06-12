import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { ItemDetailsComponent } from './item-details/item-details.component';


const routes: Routes = [
  {
    path: ':type',
    component: ExploreComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'grid',
  },
  {
    path: 'item/:itemName',
    component: ItemDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
