import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
// import { MatFileUploadModule } from 'angular-material-fileupload';
import { MatIconModule } from '@angular/material/icon'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    // MatFileUploadModule
    MatIconModule

   

  ],
  exports:[
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
  
    // MatFileUploadModule
  ]
})
export class MaterialModule { }
