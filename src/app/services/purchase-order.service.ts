import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from '../../environments/environment';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class PurchaseOrderService {
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private _http: HttpClient) {}

  public makePurchase(order: Order): Observable<Order> {
    return this._http.post<Order>(
      `${URL.API}/pedidos`,
      order,
      this._httpOptions,
    );
  }
}
