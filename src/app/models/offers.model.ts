import { Observable } from 'rxjs';

export type Offers = {
  id: number;
  categoria: string;
  titulo: string;
  descricao_oferta: string;
  anunciante: string;
  valor: number;
  destaque: boolean;
  imagens: {
    url: string;
  }[];
};

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
