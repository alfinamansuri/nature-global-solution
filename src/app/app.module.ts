import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Shared/shared.module';
import { AuthenticationModule } from './views/authentication/authentication.module';
import { MaterialModule } from './Shared/material/material.module';
// import { ShowHidePasswordModule } from 'ngx-show-hide-password';


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
    RouterModule
    // ShowHidePasswordModule 
    
    
  ],
  exports: [
    SharedModule,
    AuthenticationModule,    
    MaterialModule,
    RouterModule
    // ShowHidePasswordModule 
  
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
