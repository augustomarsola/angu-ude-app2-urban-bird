import { Routes } from '@angular/router';
import { FunnyComponent } from './funny/funny.component';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'diversao', component: FunnyComponent },
  { path: 'restaurantes', component: RestaurantComponent },
  { path: 'oferta', component: HomeComponent },
  { path: 'oferta/:id', component: OfferComponent },
];
