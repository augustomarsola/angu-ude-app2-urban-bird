import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { URL } from '../../environments/environment';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class PurchaseOrderService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private _http: HttpClient) {}

  public makePurchase(order: Order): Observable<void> {
    return this._http
      .post<void>(`${URL.API}/pedidos`, order, this.httpOptions)
      .pipe(
        map((res) => {
          console.log(res);
        }),
      );
  }
}
