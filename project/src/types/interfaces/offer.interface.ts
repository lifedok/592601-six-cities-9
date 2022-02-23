export interface IOffer {
  id: number | string,
  previewImage: string,
  price: number,
  priceText: string,
  rating: number,
  description: string,
  type: string,
  isMark?: boolean,
}
