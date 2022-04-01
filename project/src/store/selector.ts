import { useAppSelector } from '../hooks';
import { IOffersByLocationCity } from '../mocks/offers-by-location-city-mock.data';
import { AuthorizationStatus } from "../types/enums/route.enum";

export const useGetOffers = () => useAppSelector((state) => state.offers);
export const useGetLocationCity = () => useAppSelector((state) => state.locationCity);

export const getCityList = (data: IOffersByLocationCity[]) => data.map(({city}) => city);

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean => authorizationStatus === AuthorizationStatus.UNKNOWN;
