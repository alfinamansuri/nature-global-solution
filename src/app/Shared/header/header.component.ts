import { Component, Inject, HostListener  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

// declare var jQuery: any;
HostListener('window:scroll')



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(@Inject(DOCUMENT) private document: Document,private route:ActivatedRoute,private router:Router) { }
    
  @HostListener('window:scroll', [])

  onWindowScroll() {
      if (document.documentElement.scrollTop > 10) {
        document.querySelector('header')!.classList.add('sticky-header');
      } else {
        document.querySelector('header')!.classList.remove('sticky-header');
      }    
  }
 
  onClick() {
    this.router.navigate(['/pages/about']);
  
  }
}


