import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule }from './views/pages/pages.module';
// import { LoginComponent } from './views/ctn/login.component';
// import { RegisterComponent } from './views/ctn/register.component';
// import { LoginComponent as LoginComponentmrn } from './views/mrn/login.component';
// import { RegisterComponent as RegisterComponentmen } from './views/mrn/register.component';






const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./views/authentication/authentication.module').then(m => m.AuthenticationModule) },
  {path: 'pages', loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule ) }
  // {path: 'auth', loadChildren: () => import('./views/authentication/authentication.module').then(m => m.AuthenticationModule) },
  // {path:'ctn/login', component:LoginComponent},
  // {path:'ctn/register', component:RegisterComponent},
  // {path:'mrn/login', component:LoginComponentmrn},
  // {path:'mrn/register', component:RegisterComponentmen},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
