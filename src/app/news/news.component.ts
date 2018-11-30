import { Component, OnChanges,Input} from '@angular/core';
import { NewService } from '../news/shared/news.service';

@Component({
  selector: 'news-component',
  templateUrl: './news.component.html'
})

export class NewsComponent implements OnChanges { 
   
     title ='Recent Photos';
     @Input() filterBy?:string ='all'
     visibleNews : any[] = [];
     constructor(private NewService: NewService){
     this.visibleNews = this.NewService.getNews() ;
     }
ngOnChanges(){
    this.visibleNews =this.NewService.getNews();
}
    }