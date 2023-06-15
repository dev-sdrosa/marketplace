import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NewItemComponent } from './new-item/new-item.component';


const routes: Routes = [
  {
    path: "detail",
    component: ProfileComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'detail',
  },
  {
    path: "new-item",
    component: NewItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
