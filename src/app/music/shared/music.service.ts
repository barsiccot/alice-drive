import { Music } from './music';

import { MUSIC } from './mock-music';
import { Injectable} from '@angular/core';

@Injectable()
export class MusicService{
visibleMusic:any[];
 getMusics(){
     return this.visibleMusic=MUSIC.slice(0);
 }
 getMusic(id:number){
     return MUSIC.slice(0).find(music => music.id==id)
 }
 getHeroes(): Promise<Music[]> {
    return Promise.resolve(MUSIC);
  }
} 
