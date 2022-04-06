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
  favoriteHotels: IHotel[],
  nearbyHotels: IHotel[],
  comments: IComment[],
  isDataLoaded: boolean,
};

// export type HotelsTabData = Partial<HotelsData> & {
//   city: IPlace,
//   selectedTabHotels: IHotel[]
// };

export type HotelsSortData = {
  hotels: IHotel[],
  selectedTabHotels: IHotel[],
  city: IPlace,
};

export type HotelsTabData = {
  city: IPlace,
  hotels: IHotel[],
  selectedTabHotels: IHotel[]
};
