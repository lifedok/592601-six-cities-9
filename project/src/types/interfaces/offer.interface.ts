import { ILocation } from './location.interface';

export interface IOffer {
  city?: IPlace,
  id: number | string,
  name: string,
  previewImage: string,
  price: number,
  priceText: string,
  rating: number,
  type: string,
  isMark?: boolean,
  location?: ILocation
}

export type IPlace = {
  name: string,
  location: ILocation
};
