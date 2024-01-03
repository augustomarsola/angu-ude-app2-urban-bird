import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class PurchaseOrderService {
  public makePurchase(order: Order) {
    console.log(order);
  }
}
