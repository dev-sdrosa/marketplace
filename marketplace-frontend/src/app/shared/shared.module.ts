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



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotificationComponent,
    ItemComponent,
    ItemListComponent,
    SectionHeaderComponent,
    TabClickDirective
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
    TabClickDirective
  ],
})
export class SharedModule { }
