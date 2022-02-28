import { IOffer } from './offer.interface';

export interface INearPlacesList {
  nearPlaces: INearPlaceItem[]
}

export interface INearPlaceItem extends IOffer {
  new?: string
}
