import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, RouterModule} from '@angular/router';
import {AppComponent} from './app/app.component';
import {importProvidersFrom} from '@angular/core';
import {ProfileComponent} from './app/profile/profile.component';
import {HomeComponent} from './app/home/home.component';
import {AboutComponent} from './app/about/about.component';
import {GalleryComponent} from './app/gallery/gallery.component';
import {ProjectsComponent} from './app/projects/projects.component';
import {UpdatesComponent} from './app/updates/updates.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {path: 'profile', component: ProfileComponent},
      {path: 'about', component: AboutComponent},
      {path: 'home', component: HomeComponent},
      {path: 'updates', component: UpdatesComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
    importProvidersFrom(RouterModule),
  ],
}).catch(err => console.error(err));
