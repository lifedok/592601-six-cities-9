import { useEffect, useRef } from 'react';
import { Icon, Marker } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../mocks/map.data';
import useMap from '../../hooks/useMap';
import { IOffer } from '../../types/interfaces/offer.interface';
import { ILocation } from '../../types/interfaces/map.interface';
import 'leaflet/dist/leaflet.css';

type TMapView = {
  city: ILocation,
  offers: IOffer[],
  hoveredOffer: IOffer | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function MapView(props: TMapView): JSX.Element {
  const {city, offers, hoveredOffer} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer: IOffer) => {
        const marker = new Marker({
          lat: offer.location?.lat || 0,
          lng: offer.location?.lng || 0,
        });

        marker
          .setIcon(hoveredOffer !== undefined && offer.id + offer.name === hoveredOffer.id + hoveredOffer.name ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, offers, hoveredOffer]);

  return (
    <div style={{height: '100%'}} ref={mapRef}/>
  );
}
