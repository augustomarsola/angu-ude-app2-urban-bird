import { Injectable, WritableSignal, signal } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Offers } from '../models/offers.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartItens: WritableSignal<CartItem[]> = signal([]);
  public cartItens = this._cartItens.asReadonly();
  public setNewCartItem(cartItem: Offers): void {
    const newCartItem: CartItem = {
      id: cartItem.id,
      titulo: cartItem.titulo,
      descricao_oferta: cartItem.descricao_oferta,
      img: cartItem.imagens[0].url,
      valor: cartItem.valor,
      quantidade: 1,
    };

    const newCartItens = [...this._cartItens(), newCartItem];
    this._cartItens.set(newCartItens);
  }
}
