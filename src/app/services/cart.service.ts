import { Injectable, WritableSignal, signal } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Offers } from '../models/offers.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _localStorageName = '@UrbanBird:cartItens';
  private _cartItens: WritableSignal<CartItem[]> = signal([]);

  public cartItens = this._cartItens.asReadonly();

  constructor() {
    this._verifyLocalStorage();
  }

  public setNewCartItem(cartItem: Offers): void {
    const newCartItem: CartItem = {
      id: cartItem.id,
      titulo: cartItem.titulo,
      descricao_oferta: cartItem.descricao_oferta,
      img: cartItem.imagens[0].url,
      valor: cartItem.valor,
      quantidade: 1,
    };

    const oldCartItens = this._cartItens();
    const hasItem = oldCartItens.find((item) => item.id === newCartItem.id);
    if (hasItem) {
      const newCartItens = oldCartItens.map((item) => {
        if (item.id === newCartItem.id) {
          return { ...item, quantidade: item.quantidade + 1 };
        }
        return item;
      });
      this._cartItens.set(newCartItens);
      this._saveLocalStorage();
    } else {
      const newCartItens = [...this._cartItens(), newCartItem];
      this._cartItens.set(newCartItens);
      this._saveLocalStorage();
    }
  }

  private _verifyLocalStorage(): void {
    const cartItens = localStorage.getItem(this._localStorageName);
    if (cartItens) {
      this._cartItens.set(JSON.parse(cartItens));
    }
  }

  private _saveLocalStorage(): void {
    localStorage.setItem(
      this._localStorageName,
      JSON.stringify(this._cartItens()),
    );
  }
}
