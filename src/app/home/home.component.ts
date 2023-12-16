import { Component, OnInit } from '@angular/core';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  providers: [OffersService],
})
export class HomeComponent implements OnInit {
  constructor(private _offersService: OffersService) {}
  ngOnInit(): void {
    console.log(this._offersService.getOffers());
  }
}
