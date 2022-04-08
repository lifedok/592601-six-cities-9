import { ILocation } from './location.interface';
import { IHost } from './host.interface';

export interface IHotel {
  id: number,
  location: ILocation,
  city: IPlace,
  bedrooms: number
  description: string
  goods: string[]
  host?: IHost,
  images?: string[]
  isFavorite?: boolean
  isPremium?: boolean
  maxAdults?: number
  previewImage: string
  price: number
  rating: number
  title: string
  type: string
}

export type IPlace = {
  name: string,
  location: ILocation
};

