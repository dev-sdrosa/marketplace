import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class HomeModule { }
