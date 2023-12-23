import { Component, OnInit, inject } from '@angular/core';
import { of } from 'rxjs';
import { Offers, ProductProps } from '../models/offers.model';
import { ProductVisualizationComponent } from '../product-visualization/product-visualization.component';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [ProductVisualizationComponent],
  templateUrl: './restaurant.component.html',
})
export class RestaurantComponent implements OnInit {
  public productProps: ProductProps = {
    title: 'Rodízios, Buffet, Carnes Especiais e muito mais!',
    description: 'Conheça as melhores ofertas de restaurantes:',
    products$: of<Offers[]>([]),
  };

  private _offersService: OffersService = inject(OffersService);

  ngOnInit(): void {
    this.productProps.products$ =
      this._offersService.getOffersByCategory('restaurante');
  }
}
