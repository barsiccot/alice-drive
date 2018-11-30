import { Component, OnChanges} from '@angular/core';
import {TourService} from './shared/tour.service';
import { Tours } from './shared/tour';
@Component({
    selector: 'tour-component',
    templateUrl: './tours.component.html',
    styleUrls:['./tours.component.css'],

})
export class ToursComponent implements OnChanges { 
   
    visibleTours : any[] = [];
    constructor(private TourService: TourService){
    this.visibleTours = this.TourService.getTours() ;
    }
ngOnChanges(){
   this.visibleTours =this.TourService.getTours();
}
   }