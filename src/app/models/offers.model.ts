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

export type HowToUse = {
  id: number;
  descricao: string;
};
