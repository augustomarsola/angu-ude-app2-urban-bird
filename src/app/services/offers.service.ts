import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { URL } from '../../environments/environment';
import { Offers } from '../models/offers.model';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  constructor(
    private _http: HttpClient,
    private _router: Router,
  ) {}
  public getMainOffers(): Observable<Offers[]> {
    return this._http.get<Offers[]>(`${URL.API}/ofertas?destaque=true`);
  }

  public getOffersByCategory(
    category: 'restaurante' | 'diversao',
  ): Observable<Offers[]> {
    return this._http.get<Offers[]>(
      `${URL.API}/ofertas?&categoria=${category}`,
    );
  }

  public getOfferById(id: number): Observable<Offers> {
    return this._http.get<Offers[]>(`${URL.API}/ofertas/?id=${id}`).pipe(
      map((offers) => {
        if (offers.length === 0) {
          this._router.navigate(['/']);
        }
        return offers[0];
      }),
    );
  }
}
