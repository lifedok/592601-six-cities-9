export interface FavoritesCardProps {
  location: string,
  cards: FavoritesCardViewProps[]
}

export interface FavoritesCardViewProps {
  previewImage: string,
  price: number,
  priceText: string,
  rating: number,
  description: string,
  type: string,
  isMark?: boolean,
}

