import { Component, OnChanges,Input} from '@angular/core';
import { ImageService } from '../images/shared/image.service';

@Component({
    selector: 'gallery-component',
    templateUrl: './gallery.component.html',
    styleUrls:['./gallery.component.css']
})
export class GalleryComponent implements OnChanges { 
   
     title ='Recent Photos';
     @Input() filterBy?:string ='all'
     visibleImages : any[] = [];
     constructor(private ImageService: ImageService){
     this.visibleImages = this.ImageService.getImages() ;
     }
ngOnChanges(){
    this.visibleImages =this.ImageService.getImages();
}
    }