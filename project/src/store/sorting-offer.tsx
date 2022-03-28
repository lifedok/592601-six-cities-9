import { ESorting } from "../types/enums/sort-option-list.enum";
import { useGetOffers } from './selector';

export function SortingOffer(sortType: string) {
  const offers = useGetOffers();

  console.log('offers', offers);
  console.log('sortType', sortType);
  console.log('sortType === ESorting.LOW_TO_HIGH', sortType === ESorting.LOW_TO_HIGH);
  const isSortedByDefault = () => offers.sort();
  const getOfferByLowToHigh = () => offers.sort((a, b) => a.price - b.price);
  const getOfferByHighToLow = () => offers.sort((a, b) => b.price - a.price);
  const getOfferByTopRatedFirst = () => offers.sort((a, b) => a.rating - b.rating);

  switch (sortType) {
    case ESorting.POPULAR:
      return {...isSortedByDefault()};
    case ESorting.LOW_TO_HIGH:
      return {...getOfferByLowToHigh()};
    case ESorting.HIGH_TO_LOW:
      return getOfferByHighToLow();
    case ESorting.TOP_RATED_FIRST:
      return getOfferByTopRatedFirst();
  }
  return isSortedByDefault();
}
