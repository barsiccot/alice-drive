import { Media } from './media';

import { MEDIA } from './mock-media';
import { Injectable} from '@angular/core';
@Injectable()
export class MediaService{
visibleMedias:any[];
 getMedias(){
     return this.visibleMedias=MEDIA.slice(0);
 }
 getMedia(id:number){
     return MEDIA.slice(0).find(media => media.id==id)
 }
 getHeroes(): Promise<Media[]> {
    return Promise.resolve(MEDIA);
  }
} 
