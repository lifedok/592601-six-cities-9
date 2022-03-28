import { ESorting } from '../types/enums/sort-option-list.enum';
import { IOfferByCity } from '../mocks/offers-by-location-city-mock.data';

export function getSortingOffers(sortType: string, offers: IOfferByCity[]) {

  const getOfferByLowToHigh = () => offers.sort((a, b) => a.price - b.price);
  const getOfferByHighToLow = () => offers.sort((a, b) => b.price - a.price);
  const getOfferByTopRatedFirst = () => offers.sort((a, b) => a.rating - b.rating);

  switch (sortType) {
    case ESorting.POPULAR:
      return offers;
    case ESorting.LOW_TO_HIGH:
      return getOfferByLowToHigh();
    case ESorting.HIGH_TO_LOW:
      return getOfferByHighToLow();
    case ESorting.TOP_RATED_FIRST:
      return getOfferByTopRatedFirst();
    default:
      return offers;
  }
}
