import { INearPlacesList } from '../types/interfaces/near-places.interface';

const nearPlaces: INearPlacesList = {
  nearPlaces: [
    {
      id: 3,
      previewImage: 'img/room.jpg',
      price: 132,
      priceText: 'night',
      rating: 86,
      name: 'Beautiful & luxurious apartment at great location',
      type: 'Apartment',
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
  ],
};

export function getNearPlaces(): INearPlacesList {
  return nearPlaces;
}
