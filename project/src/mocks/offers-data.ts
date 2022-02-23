import { IOffer } from "../types/interfaces/offer.interface";

const offerList: IOffer[] = [
  {
    id: 3,
    previewImage: 'img/apartment-small-03.jpg',
    price: 180,
    priceText: 'night',
    rating: 100,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    isMark: true,
  },
  {
    id: 4,
    previewImage: 'img/room-small.jpg',
    price: 80,
    priceText: 'night',
    rating: 80,
    description: 'Wood and stone place',
    type: 'Private room',
  },
  {
    id: 5,
    previewImage: 'img/apartment-small-04.jpg',
    price: 180,
    priceText: 'night',
    rating: 100,
    description: 'White castle',
    type: 'Apartment',
  },
];

export function getOffers(): IOffer[] {
  return offerList;
}
