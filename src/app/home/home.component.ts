import { Component, OnInit } from '@angular/core';
import { OffersService } from '../services/offers.service';
import { Offers } from '../models/offers.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  providers: [OffersService],
})
export class HomeComponent implements OnInit {
  public offers: Offers[] = [];

  constructor(private _offersService: OffersService) {}

  ngOnInit(): void {
    this.offers = this._offersService.getOffers();
  }
}
