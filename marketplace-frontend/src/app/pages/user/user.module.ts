import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './views/profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { NewItemComponent } from './views/new-item/new-item.component';

@NgModule({
  declarations: [
    ProfileComponent,
    NewItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
