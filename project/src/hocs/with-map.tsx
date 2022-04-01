import MapView from '../components/map-view/map-view';
import { ComponentType, useState } from 'react';
import { IHotel, IPlace } from '../types/interfaces/hotel.interface';

type ComponentProps<T> = Omit<T, keyof HOCProps>;

type HOCProps = {
  renderMap: (location: IPlace, hotels: IHotel[]) => void;
  onPlaceCardHover: (selectedOffer: IHotel) => void
};

export default function withMap<T>(Component: ComponentType<T>, hotels: IHotel[]): ComponentType<Omit<T, keyof HOCProps>> {

  function WithMap(props: ComponentProps<T>): JSX.Element {
    const [selectedPoint, setSelectedPoint] = useState<IHotel | undefined>(undefined);

    const onPlaceCardHover = (placeCardName: string) => {
      const currentPoint = hotels.find((hotel) => (hotel.id+hotel.city.name).toString() === placeCardName);
      setSelectedPoint(currentPoint);
    };

    return (
      <Component
        {...props as T}
        onPlaceCardHover={onPlaceCardHover}
        renderMap={(location: IPlace) => (
          <MapView
            hotels={hotels}
            city={location}
            hoveredOffer={selectedPoint}
          />
        )}
      />
    );
  }
  return WithMap;
}
