import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Offers } from '../models/offers.model';
import { CartService } from '../services/cart.service';
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
export class OfferComponent implements OnInit, OnDestroy {
  public offer$ = new Observable<Offers>();
  private _destroy$ = new Subject();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _offersService: OffersService,
    private _cartService: CartService,
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params
      .pipe(takeUntil(this._destroy$))
      .subscribe((params) => {
        this.offer$ = this._offersService.getOfferById(params['id']);
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  public addToCart(offer: Offers): void {
    this._cartService.setNewCartItem(offer);
  }
}
