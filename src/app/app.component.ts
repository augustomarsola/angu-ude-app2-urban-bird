import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FunnyComponent } from './funny/funny.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FunnyComponent,
    RestaurantComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angu-ude-app2-urban-bird';
}
