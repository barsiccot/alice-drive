

import { Component, OnChanges} from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { Music } from './shared/music';
import { MusicService } from './shared/music.service';

@Component({
  selector: 'music-component',
  templateUrl: './music.component.html'
})
export class MusicComponent implements OnChanges  { 
    music: Music[];
    selectedText:string;
    selectedMusic: Music;
     visibleMusic : any[] = [];
     constructor(private musicService: MusicService,
        private route: ActivatedRoute){
     this.visibleMusic = this.musicService.getMusics() ;

     }
   onSelect(music: Music,musicText:string): void {
        this.selectedMusic = music;
        this.selectedText = musicText;

      }
     
ngOnChanges(){
    this.visibleMusic =this.musicService.getMusics();
}
    }