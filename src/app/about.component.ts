import { Component } from '@angular/core';
import { ImageService } from './images/shared/image.service';
import {TourService} from './tours/shared/tour.service';

@Component({
  selector: 'about-component',
  templateUrl: './about.component.html'
})
export class AboutComponent  { 
  visibleTours : any[] = [];
  visibleImages : any[] = [];
  constructor(private ImageService: ImageService,private TourService: TourService){
    
    this.visibleTours = this.TourService.getTours() ;
    this.visibleImages = this.ImageService.getImages() ;
  }

  
   }
