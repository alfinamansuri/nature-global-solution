import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from 'src/app/Shared/shared.module';
import { CtnModule }from './ctn/ctn.module';
import { MrnModule } from './mrn/mrn.module';
import { MaterialModule } from 'src/app/Shared/material/material.module';





@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    CtnModule,
    MrnModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    SharedModule,
    CtnModule,
    MrnModule,
    MaterialModule,
    RouterModule
  ]
})
export class AuthenticationModule { }
