import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './components/notification/notification.component';
import { ItemComponent } from './components/item-card/item.component';
import { ItemListComponent } from './components/item-list/item-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotificationComponent,
    ItemComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotificationComponent,
    ItemComponent,
    ItemListComponent
  ],
})
export class SharedModule { }
