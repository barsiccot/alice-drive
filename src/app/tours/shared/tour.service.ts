import { Tours } from './tour';

import { TOUR } from './mock-tours';
import { Injectable} from '@angular/core';

@Injectable()
export class TourService{
visibleTours:any[];
 getTours(){
     return this.visibleTours=TOUR.slice(0);
 }
 getTour(id:number){
     return TOUR.slice(0).find(tour => tour.id==id)
 }
 getHeroes(): Promise<Tours[]> {
    return Promise.resolve(TOUR);
  }
} 
