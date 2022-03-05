export interface IOffer {
  id: number | string,
  name: string,
  previewImage: string,
  price: number,
  priceText: string,
  rating: number,
  type: string,
  isMark?: boolean,
  location: {
    latitude: number
    longitude: number
    zoom: number
  }
}
