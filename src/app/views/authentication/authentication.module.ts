import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from 'src/app/Shared/shared.module';
import { CtnModule }from './ctn/ctn.module';
import { MrnModule } from './mrn/mrn.module';




@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    CtnModule,
    MrnModule,
  ],
  exports:[
    SharedModule,
    CtnModule,
    MrnModule
  ]
})
export class AuthenticationModule { }
