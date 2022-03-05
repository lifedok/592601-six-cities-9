export interface ICity {
  title: string,
  lat: number,
  lng: number,
  zoom: number,
}

export type IPoint = Omit<ICity, "zoom">;
