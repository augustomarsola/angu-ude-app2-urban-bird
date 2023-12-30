import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Offers } from '../models/offers.model';
import { BrlCurrencyPipe } from '../pipes/brl-currency.pipe';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [
    AsyncPipe,
    BrlCurrencyPipe,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './offer.component.html',
})
export class OfferComponent implements OnInit {
  public offer$ = new Observable<Offers>();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _offersService: OffersService,
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.offer$ = this._offersService.getOfferById(params['id']);
    });
  }
}
