import { Images } from './images';

import { IMAGES } from './mock-images';
import { Injectable} from '@angular/core';
@Injectable()
export class ImageService{
visibleImages:any[];
 getImages(){
     return this.visibleImages=IMAGES.slice(0);
 }
 getImage(id:number){
     return IMAGES.slice(0).find(image => image.id==id)
 }
} 
