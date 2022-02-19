import { FavoritesCardProps } from "./favorites.interface";

const favoritesList: FavoritesCardProps[] = [
  {
    location: 'Amsterdam',
    cards: [
      {
        previewImage: "img/apartment-small-03.jpg",
        price: 180,
        priceText: 'night',
        rating: 100,
        description: 'Nice, cozy, warm big bed apartment',
        type: "Apartment",
        isMark: true
      },
      {
        previewImage: "img/room-small.jpg",
        price: 80,
        priceText: 'night',
        rating: 80,
        description: 'Wood and stone place',
        type: "Private room"
      }
    ]
  },
  {
    location: 'Cologne',
    cards: [
      {
        previewImage: "img/apartment-small-04.jpg",
        price: 180,
        priceText: 'night',
        rating: 100,
        description: 'White castle',
        type: "Apartment"
      }
    ]
  },
];

export function getFavorites(): FavoritesCardProps[] {
  return favoritesList;
}
