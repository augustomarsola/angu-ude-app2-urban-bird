import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Offers } from '../models/offers.model';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [
    AsyncPipe,
    CurrencyPipe,
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
