import { useEffect, useRef } from 'react';
import { Icon, Marker } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../mocks/map.data';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import { IHotel, IPlace } from '../../types/interfaces/hotel.interface';

type TMapView = {
  city: IPlace,
  hotels: IHotel[],
  hoveredOffer: IHotel | undefined;
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
  const {city, hotels, hoveredOffer} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city.location);

  useEffect(() => {
    if (map) {
      hotels.forEach((hotel: IHotel) => {
        const marker = new Marker({
          lat: hotel.location?.latitude || 0,
          lng: hotel.location?.longitude || 0,
        });

        marker
          .setIcon(hoveredOffer !== undefined && hotel.id + hotel.city.name === hoveredOffer.id + hoveredOffer.city.name ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, hotels, hoveredOffer, city.location]);

  return (
    <div style={{height: '100%'}} ref={mapRef}/>
  );
}
