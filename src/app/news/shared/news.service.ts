import { News } from './new';

import { NEWS } from './mock-news';
import { Injectable} from '@angular/core';

@Injectable()
export class NewService{
visibleNews:any[];
 getNews(){
     return this.visibleNews=NEWS.slice(0);
 }
 getNew(id:number){
     return NEWS.slice(0).find(news => news.id==id)
 }
 getHeroes(): Promise<News[]> {
    return Promise.resolve(NEWS);
  }
} 
