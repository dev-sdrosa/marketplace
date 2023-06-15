import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './components/notification/notification.component';
import { ItemComponent } from './components/item-card/item.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { TabClickDirective } from './directives/tab-click.directive';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { OrderFilterComponent } from './components/order-filter/order-filter.component';
import { ItemCardDemoComponent } from './components/item-card-demo/item-card-demo.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotificationComponent,
    ItemComponent,
    ItemListComponent,
    SectionHeaderComponent,
    TabClickDirective,
    ItemsListComponent,
    OrderFilterComponent,
    ItemCardDemoComponent
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
    ItemListComponent,
    SectionHeaderComponent,
    ItemsListComponent,
    OrderFilterComponent,
    ItemCardDemoComponent,
    TabClickDirective
  ],
})
export class SharedModule { }
