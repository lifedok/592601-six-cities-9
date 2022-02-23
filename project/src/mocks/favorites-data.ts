import { IFavoriteCardList } from "../pages/favorites-page/favorites.interface";

const favoritesList: IFavoriteCardList[] = [
  {
    location: 'Amsterdam',
    cards: [
      {
        id: '20',
        previewImage: 'img/apartment-small-03.jpg',
        price: 180,
        priceText: 'night',
        rating: 100,
        description: 'Nice, cozy, warm big bed apartment',
        type: 'Apartment',
        isMark: true,
      },
      {
        id: '10',
        previewImage: 'img/room-small.jpg',
        price: 80,
        priceText: 'night',
        rating: 80,
        description: 'Wood and stone place',
        type: 'Private room',
      },
    ],
  },
  {
    location: 'Cologne',
    cards: [
      {
        id: '0',
        previewImage: 'img/apartment-small-04.jpg',
        price: 180,
        priceText: 'night',
        rating: 100,
        description: 'White castle',
        type: 'Apartment',
      },
    ],
  },
];

export function getFavorites(): IFavoriteCardList[] {
  return favoritesList;
}
