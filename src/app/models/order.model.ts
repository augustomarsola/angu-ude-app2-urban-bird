import { CartItem } from './cart-item.model';

export type Order = {
  id: number;
  address: string;
  number: string;
  complement?: string;
  paymentMethod: string;
  itens: CartItem[];
};
