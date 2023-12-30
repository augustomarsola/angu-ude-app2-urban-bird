import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { URL } from '../../environments/environment';
import { HowToUse, Offers, WhereIs } from '../models/offers.model';

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
    return this._http.get<Offers[]>(`${URL.API}/ofertas?id=${id}`).pipe(
      map((offers) => {
        if (offers.length === 0) {
          this._router.navigate(['/']);
        }
        return offers[0];
      }),
    );
  }

  public getHowToUseById(id: number): Observable<HowToUse> {
    return this._http
      .get<HowToUse[]>(`${URL.API}/como-usar?id=${id}`)
      .pipe(map((howToUse) => howToUse[0]));
  }

  public getWhereIsById(id: number): Observable<WhereIs> {
    return this._http
      .get<WhereIs[]>(`${URL.API}/onde-fica?id=${id}`)
      .pipe(map((whereIs) => whereIs[0]));
  }

  public searchOffer(searchText: string): Observable<Offers[]> {
    if (!searchText.trim()) {
      return of([]);
    }
    return this._http.get<Offers[]>(
      `${URL.API}/ofertas?descricao_oferta_like=${searchText}`,
    );
  }
}
