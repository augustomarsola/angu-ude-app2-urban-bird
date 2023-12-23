import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FunnyComponent } from './funny/funny.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'diversao', component: FunnyComponent },
  { path: 'restaurantes', component: RestaurantComponent },
];
