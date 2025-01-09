import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';

export const routes: Route[] = [
  { path: '', component: AppComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
];
