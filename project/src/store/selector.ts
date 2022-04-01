import { useAppSelector } from '../hooks';
import { AuthorizationStatus } from "../types/enums/route.enum";
import { IHotel } from "../types/interfaces/hotel.interface";

export const useGetHotels = () => useAppSelector((state) => state.hotels);
export const useGetLocationCity = () => useAppSelector((state) => state.city);

export const getCityList = (data: IHotel[]) => removeDuplicates(data).map(({city}) => city);
function removeDuplicates(array: IHotel[]) {
  let uniq: any = {};
  return array.filter(obj => !uniq[obj.city.name] && (uniq[obj.city.name] = true))
}

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean => authorizationStatus === AuthorizationStatus.UNKNOWN;
