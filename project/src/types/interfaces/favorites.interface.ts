import { IOffer } from './offer.interface';

export interface IFavoriteCardList {
  location: string,
  cards: IFavoriteCard[]
}

export type IFavoriteCard = Omit<IOffer, 'location'>;

