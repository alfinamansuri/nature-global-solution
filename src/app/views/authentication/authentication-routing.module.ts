import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './ctn/login.component';
import { RegisterComponent } from './ctn/register.component';
import { LoginComponent as LoginComponentmrn } from './mrn/login.component';
import { RegisterComponent as RegisterComponentmrn } from './mrn/register.component';


const routes: Routes = [
    {path:'ctn/login',component:LoginComponent },
    {path:'ctn/register',component:RegisterComponent},
    {path:'mrn/login',component:LoginComponentmrn },
    {path:'mrn/register',component:RegisterComponentmrn},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
