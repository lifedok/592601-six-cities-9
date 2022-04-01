import { ESorting } from '../types/enums/sort-option-list.enum';
import { IHotel } from '../types/interfaces/hotel.interface';

export function getSortingHotels(sortType: string, hotels: IHotel[]) {

  const getHotelsByLowToHigh = () => hotels.sort((a, b) => a.price - b.price);
  const getHotelsByHighToLow = () => hotels.sort((a, b) => b.price - a.price);
  const getHotelsByTopRatedFirst = () => hotels.sort((a, b) => a.rating - b.rating);

  switch (sortType) {
    case ESorting.POPULAR:
      return hotels;
    case ESorting.LOW_TO_HIGH:
      return getHotelsByLowToHigh();
    case ESorting.HIGH_TO_LOW:
      return getHotelsByHighToLow();
    case ESorting.TOP_RATED_FIRST:
      return getHotelsByTopRatedFirst();
    default:
      return hotels;
  }
}
