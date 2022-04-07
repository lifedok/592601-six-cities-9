import { store } from '../store';
import { AuthorizationStatus } from './enums/route.enum';
import { IHotel, IPlace } from './interfaces/hotel.interface';
import { IComment } from './interfaces/comments.interface';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type IInitialGlobalState = {
  hotels: IHotel[],
  city: IPlace,
  selectedTabHotels: IHotel[],
  selectedOfferHotel: any,
  favoriteHotels: IHotel[],
  nearbyHotels: IHotel[],
  comments: IComment[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
}

export const initialState: IInitialGlobalState = {
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
  },
  hotels: [],
  selectedTabHotels: [],
  selectedOfferHotel: null,
  favoriteHotels: [],
  nearbyHotels: [],
  comments: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
};
