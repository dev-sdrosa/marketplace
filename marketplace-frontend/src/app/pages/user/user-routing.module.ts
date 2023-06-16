import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './views/profile/profile.component';
import { NewItemComponent } from './views/new-item/new-item.component';
import { AuthGuard } from '../auth/services/auth.guard';


const routes: Routes = [
  {
    path: "detail",
    component: ProfileComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'detail',
  },
  {
    path: "new-item",
    component: NewItemComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
