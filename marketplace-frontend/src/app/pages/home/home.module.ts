import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SharedModule,
  ]
})
export class HomeModule { }
