import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/Shared/shared.module';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    SharedModule
  ]
})
export class MrnModule { }
