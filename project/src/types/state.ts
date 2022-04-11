import { store } from '../store';
import { AuthorizationStatus } from './enums/route.enum';
import { IHotel, IPlace } from './interfaces/hotel.interface';
import { IComment } from './interfaces/comments.interface';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};


export type HotelsData = {
  hotels: IHotel[],
  sortingHotels: IHotel[],
  city: IPlace,
  selectedTabHotels: IHotel[],
  selectedOfferHotel: any,
  favoriteHotels: IHotel[],
  nearbyHotels: IHotel[],
  comments: IComment[],
  isDataLoaded: boolean,
}
