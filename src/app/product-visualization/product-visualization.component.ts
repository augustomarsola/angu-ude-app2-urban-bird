import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Offers, ProductProps } from '../models/offers.model';
import { BrlCurrencyPipe } from '../pipes/brl-currency.pipe';

@Component({
  selector: 'app-product-visualization',
  standalone: true,
  imports: [BrlCurrencyPipe, AsyncPipe, RouterLink],
  templateUrl: './product-visualization.component.html',
})
export class ProductVisualizationComponent {
  @Input({ required: true }) public productProps: ProductProps = {
    title: '',
    description: '',
    products$: new Observable<Offers[]>(),
  };
}
