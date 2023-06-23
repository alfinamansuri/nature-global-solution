import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from 'src/app/Shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HelpPageComponent } from './help-page/help-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    ContactComponent,
    HowItWorkComponent,
    TermsComponent,
    PrivacyComponent,
    HelpPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ],
  exports: [
    SharedModule,
    HomePageComponent,
    AboutPageComponent
    
  ]
})
export class PagesModule { }
