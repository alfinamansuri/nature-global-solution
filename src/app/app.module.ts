import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Shared/shared.module';
import { AuthenticationModule } from './views/authentication/authentication.module';
import { MaterialModule } from './Shared/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthenticationModule,    
    MaterialModule,
    
    
  ],
  exports: [
    SharedModule,
    AuthenticationModule,    
    MaterialModule
  
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
