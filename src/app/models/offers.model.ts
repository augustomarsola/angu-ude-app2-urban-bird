import { Observable } from 'rxjs';

export class Offers {
  public id: number = 0;
  public categoria: string = '';
  public titulo: string = '';
  public descricao_oferta: string = '';
  public anunciante: string = '';
  public valor: number = 0;
  public destaque: boolean = false;
  public imagens = [
    {
      url: '',
    },
  ];
}

export type ProductProps = {
  title: string;
  description: string;
  products$: Observable<Offers[]>;
};

type OffersDescriptions = {
  id: number;
  descricao: string;
};

export type HowToUse = OffersDescriptions;
export type WhereIs = OffersDescriptions;
