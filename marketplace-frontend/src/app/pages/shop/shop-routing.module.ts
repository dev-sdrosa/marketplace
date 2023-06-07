import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';


const routes: Routes = [
  {
    path: ':type/items',
    component: ExploreComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'grid/items',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
