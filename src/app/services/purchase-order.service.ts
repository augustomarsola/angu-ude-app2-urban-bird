import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PurchaseOrderService {
  public makePurchase() {
    console.log('makePurchase');
  }
}
