import { Injectable, WritableSignal, signal } from '@angular/core';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartItens: WritableSignal<CartItem[]> = signal([]);
  public cartItens = this._cartItens.asReadonly();
}
