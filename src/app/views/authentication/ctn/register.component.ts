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

  // selected = '1';
  countrys: Country[] = [
    {value: 'country-0', viewValue: 'Andorra'},
    {value: 'country-1', viewValue: 'American Samoa'},
    {value: 'country-2', viewValue: 'Algeria'},
  ];






}
