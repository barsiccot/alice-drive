import { Component , OnInit} from '@angular/core';
import { TourService } from './shared/tour.service';
import { ActivatedRoute } from '@angular/router';
       
@Component({
    selector: 'tour-details-component',
    templateUrl: './tour-details.component.html',
    styleUrls:['./tour-details.component.css']
})
   export class TourDetailComponent implements OnInit {
        tour: any
        constructor(private tourService: TourService, private route:ActivatedRoute){
        }
      ngOnInit(){
        this.tour =this.tourService.getTour(
         + this.route.snapshot.params['id']
        )
      }
      }