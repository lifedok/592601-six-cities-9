import { useAppSelector } from '../hooks';
import { AuthorizationStatus } from '../types/enums/route.enum';
import { IHotel } from '../types/interfaces/hotel.interface';

export const useGetHotels = () => useAppSelector(({DATA}) => DATA.hotels);
export const useGetSortingHotels = () => useAppSelector(({DATA}) => DATA.sortingHotels);
export const useGetSelectedHotels = () => useAppSelector(({DATA}) => DATA.selectedTabHotels);
export const useGetLocationCity = () => useAppSelector(({DATA}) => DATA.city);

export const getCityList = (data: IHotel[]) => removeDuplicates(data).map(({city}) => city);
function removeDuplicates(array: IHotel[]) {
  const uniq: any = {};
  return array.filter((obj) => !uniq[obj.city.name] && (uniq[obj.city.name] = true));
}

export const useAuthStatus = () => useAppSelector(({USER}) => USER.authorizationStatus);
export const useIsDataLoaded = () => useAppSelector(({DATA}) => DATA.isDataLoaded);
export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean => authorizationStatus === AuthorizationStatus.UNKNOWN;
