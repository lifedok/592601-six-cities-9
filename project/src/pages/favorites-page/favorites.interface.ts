import { IOffer } from "../../types/interfaces/offer.interface";

export interface IFavoriteCardList {
  location: string,
  cards: IFavoriteCard[]
}

export interface IFavoriteCard extends IOffer {}

