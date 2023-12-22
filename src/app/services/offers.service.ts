import { HttpClient } from '@angular/common/http';
import { Offers } from '../models/offers.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { url } from '../../environments/environment';

@Injectable()
export class OffersService {
  constructor(private _http: HttpClient) {}
  public getMainOffers(): Observable<Offers[]> {
    return this._http.get<Offers[]>(`${url.api}/ofertas?destaque=true`);
  }
}
