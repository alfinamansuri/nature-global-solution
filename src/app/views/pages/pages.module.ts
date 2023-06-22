import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from 'src/app/Shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ],
  exports: [
    SharedModule,
    HomePageComponent,
    
  ]
})
export class PagesModule { }
