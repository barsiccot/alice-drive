import { Component , OnChanges,Input} from '@angular/core';

import { Media } from './shared/media';
import { MediaService } from './shared/media.service';
@Component({
  selector: 'media-component',
  templateUrl: './media.component.html'
})
export class MediaComponent implements OnChanges {
  music: Media[];
  title ='Recent Photos';
  @Input() filterBy?:string ='all'
  visibleMedias : any[] = [];
  constructor(private MediaService: MediaService){
  this.visibleMedias = this.MediaService.getMedias() ;
  }
ngOnChanges(){
 this.visibleMedias =this.MediaService.getMedias();
}
 }