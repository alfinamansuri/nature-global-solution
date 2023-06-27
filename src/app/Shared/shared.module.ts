import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    SlickCarouselModule,
    MaterialModule
  ],
 
})
export class SharedModule { }
