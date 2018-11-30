import {Routes} from '@angular/router';
import { AboutComponent }  from './app/about.component';
import { GalleryComponent }  from './app/gallery/gallery.component';
import { MediaComponent }  from './app/media/media.component';
import { MusicComponent }  from './app/music/music.component';
import { NewsComponent }  from './app/news/news.component';
import { ToursComponent } from './app/tours/tours.component';
export const appRoutes:Routes =[
{ path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },

  { path: 'news',       component: NewsComponent },
  { path: 'media',      component: MediaComponent },
  { path: 'music',      component: MusicComponent },
  { path: 'tours',      component: ToursComponent },
  
]