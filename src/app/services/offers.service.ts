import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from '../../environments/environment';
import { Offers } from '../models/offers.model';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  constructor(private _http: HttpClient) {}
  public getMainOffers(): Observable<Offers[]> {
    return this._http.get<Offers[]>(`${url.api}/ofertas?destaque=true`);
  }

  public getOffersByCategory(
    category: 'restaurante' | 'diversao',
  ): Observable<Offers[]> {
    return this._http.get<Offers[]>(
      `${url.api}/ofertas?&categoria=${category}`,
    );
  }
}
