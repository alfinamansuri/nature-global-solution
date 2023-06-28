import { Component } from '@angular/core';

interface Country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hide: boolean = true;

  myFunction() {
    this.hide = !this.hide;
  }

     // selected = '1';
  countrys: Country[] = [
    {value: 'country-0', viewValue: 'Andorra'},
    {value: 'country-1', viewValue: 'American Samoa'},
    {value: 'country-2', viewValue: 'Algeria'},
  ];

  
//   var input = document.getElementById( ' fileupload ' );
//   var upload_file_name = document.getElementById( 'upload-input' );

// input.addEventListener( 'change', showFileName );

// function showFileName( event ) {

//   var file_name = input.files[0].name;
//   upload_file_name.getAttribute('value') = file_name


//   }




}
