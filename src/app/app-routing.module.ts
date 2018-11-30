import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AboutComponent } from './about.component';
import { ImageDetailComponent }  from './images/image-detail.component';
import { GalleryComponent }  from './gallery/gallery.component';
import { MediaComponent }  from './media/media.component';
import { NewsComponent }  from './news/news.component';
import { TourDetailComponent } from './tours/tour-details.component';


const appRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'image/:id', component: ImageDetailComponent },
  
    { path: 'tour-details', component: TourDetailComponent },
    { path: 'news',       component: NewsComponent },
    { path: 'media',      component: MediaComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}