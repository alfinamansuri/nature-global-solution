import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';

const routes: Routes = [
  // {path:"",component:HomePageComponent},
  {path:"about",component:AboutPageComponent},
  {path:"contact",component:ContactComponent },
  {path:"how-it-work",component:HowItWorkComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
