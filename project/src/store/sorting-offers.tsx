import { ESorting } from "../types/consts/sort-option-list";
import { IOfferByCity } from "../mocks/offers-by-location-city-mock.data";

export function SortingOffer(sortType: string, offers: IOfferByCity[]) {

  // console.log('offers', offers);
  const isSortedByDefault = Object.assign(offers.sort());
  const getOfferByLowToHigh = Object.assign(offers.sort((a, b) => a.price - b.price));
  const getOfferByHighToLow = offers.sort((a, b) => b.price - a.price);
  const getOfferByTopRatedFirst = offers.sort((a, b) => a.rating - b.rating);

  switch (sortType) {
    case ESorting.POPULAR:
      return isSortedByDefault;
    case ESorting.LOW_TO_HIGH:
      return getOfferByLowToHigh;
    case ESorting.HIGH_TO_LOW:
      return getOfferByHighToLow;
    case ESorting.TOP_RATED_FIRST:
      return getOfferByTopRatedFirst;
  }
  // return isSortedByDefault;
}
