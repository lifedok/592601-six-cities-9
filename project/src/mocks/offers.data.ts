import { IOffer } from '../types/interfaces/offer.interface';

export const offersMockData: IOffer[] = [
  {
    id: 3,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    priceText: 'night',
    rating: 80,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    isMark: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    }
  },
  {
    id: 4,
    previewImage: 'img/room.jpg',
    price: 80,
    priceText: 'night',
    rating: 86,
    name: 'Wood and stone place',
    type: 'Private room',
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 10
    }
  },
  {
    id: 5,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    priceText: 'night',
    rating: 88,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10
    }
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
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10
    }
  },
  {
    id: 7,
    previewImage: 'img/room.jpg',
    price: 80,
    priceText: 'night',
    rating: 80,
    name: 'Wood and stone place',
    type: 'Private room',
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 10
    }
  },
];
