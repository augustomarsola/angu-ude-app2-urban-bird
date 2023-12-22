import { HttpClient } from '@angular/common/http';
import { Offers } from '../models/offers.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class OffersService {
  constructor(private _http: HttpClient) {}
  public getOffers(): Observable<Offers[]> {
    return this._http.get<Offers[]>('http://localhost:3001/offers');
  }
}
