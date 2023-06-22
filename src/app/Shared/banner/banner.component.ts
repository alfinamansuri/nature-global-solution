import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent {  
  
  // slides:any[] = [
  //   { img: 'https://ngs-s3-document-production.s3.af-south-1.amazonaws.com/Slider/home-banner01_1602763441.jpg' },
  //   { img: 'https://ngs-s3-document-production.s3.af-south-1.amazonaws.com/Slider/home-banner02_1595999606_1602148509.jpg' },
  //   { img: 'https://ngs-s3-document-production.s3.af-south-1.amazonaws.com/Slider/home-banner03_1595999615_1602148530.jpg' },
  // ];
  slideConfig = { slidesToShow: 1, slidesToScroll: 1, arrows : true };
  
  
  constructor() {}
  ngOnInit(): void {}

  


}


