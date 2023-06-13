import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NewItemComponent } from './new-item/new-item.component';


const routes: Routes = [
  {
    path: ":author",
    component: ProfileComponent,
  },
  {
    path: ":author/new-item",
    component: NewItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
