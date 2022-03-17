import MapView from '../components/map-view/map-view';
import { IOffer, IPlace } from '../types/interfaces/offer.interface';
import { ComponentType, useState } from 'react';

type ComponentProps<T> = Omit<T, keyof HOCProps>;

type HOCProps = {
  renderMap: (location: IPlace, offers: IOffer[]) => void;
  onPlaceCardHover: (selectedOffer: IOffer) => void
};

export default function withMap<T>(Component: ComponentType<T>, offers: IOffer[]): ComponentType<Omit<T, keyof HOCProps>> {

  function WithMap(props: ComponentProps<T>): JSX.Element {
    const [selectedPoint, setSelectedPoint] = useState<IOffer | undefined>(undefined);

    const onPlaceCardHover = (placeCardName: string) => {
      const currentPoint = offers.find((point) => (point.id+point.name).toString() === placeCardName);
      setSelectedPoint(currentPoint);
    };

    return (
      <Component
        {...props as T}
        onPlaceCardHover={onPlaceCardHover}
        renderMap={(location: IPlace) => (
          <MapView
            offers={offers}
            city={location}
            hoveredOffer={selectedPoint}
          />
        )}
      />
    );
  }
  return WithMap;
}
