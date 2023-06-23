import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HelpPageComponent } from './help-page/help-page.component';

const routes: Routes = [
  // {path:"",component:HomePageComponent},
  {path:"about",component:AboutPageComponent},
  {path:"contact",component:ContactComponent },
  {path:"how-it-work",component:HowItWorkComponent },
  {path:"terms", component:TermsComponent},
  {path:"privacy", component:PrivacyComponent},
  {path:"help",component:HelpPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
