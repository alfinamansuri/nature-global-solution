import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Shared/shared.module';
import { AuthenticationModule } from './views/authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthenticationModule,    
    
    
  ],
  exports: [
    SharedModule,
    AuthenticationModule,    
  
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
