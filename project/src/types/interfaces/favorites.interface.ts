import { IOffer } from './offer.interface';

export interface IFavoriteCardList {
  location: string,
  cards: IFavoriteCard[]
}

export interface IFavoriteCard extends IOffer {
  new?: string
}

