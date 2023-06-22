import { Component, Inject, HostListener  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// declare var jQuery: any;
HostListener('window:scroll')

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(@Inject(DOCUMENT) private document: Document) { }
    
  @HostListener('window:scroll', [])

  onWindowScroll() {
      if (document.documentElement.scrollTop > 10) {
        // console.log('+700');
        document.querySelector('header')!.classList.add('sticky-header');

        
        
      } else {
        document.querySelector('header')!.classList.remove('sticky-header');
      }    
  }
}


