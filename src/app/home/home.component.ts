import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Offers } from '../models/offers.model';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyPipe],
  templateUrl: './home.component.html',
  providers: [OffersService],
})
export class HomeComponent implements OnInit {
  public offers$ = new Observable<Offers[]>();

  constructor(private _offersService: OffersService) {}

  ngOnInit(): void {
    this.offers$ = this._offersService.getMainOffers();
  }
}
