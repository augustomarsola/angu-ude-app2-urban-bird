import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Offers, ProductProps } from '../models/offers.model';
import { ProductVisualizationComponent } from '../product-visualization/product-visualization.component';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'app-funny',
  standalone: true,
  imports: [ProductVisualizationComponent],
  templateUrl: './funny.component.html',
})
export class FunnyComponent implements OnInit {
  public productProps: ProductProps = {
    title: 'Cinema, viagens, diversão e muito mais!',
    description:
      'Conheça as melhores ofertas para você se divertir quando quiser:',
    products$: new Observable<Offers[]>(),
  };

  private _offersService: OffersService = inject(OffersService);

  ngOnInit(): void {
    this.productProps.products$ =
      this._offersService.getOffersByCategory('diversao');
  }
}
