import { IOffer } from "../types/interfaces/offer.interface";

const offerList: IOffer[] = [
  {
    id: 3,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    priceText: 'night',
    rating: 80,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    isMark: true,
  },
  {
    id: 4,
    previewImage: 'img/room.jpg',
    price: 80,
    priceText: 'night',
    rating: 86,
    name: 'Wood and stone place',
    type: 'Private room',
  },
  {
    id: 5,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    priceText: 'night',
    rating: 88,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
  {
    id: 6,
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    priceText: 'night',
    rating: 95,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    isMark: true,
  },
  {
    id: 7,
    previewImage: 'img/room.jpg',
    price: 80,
    priceText: 'night',
    rating: 80,
    name: 'Wood and stone place',
    type: 'Private room',
  },
];

export function getOffers(): IOffer[] {
  return offerList;
}
