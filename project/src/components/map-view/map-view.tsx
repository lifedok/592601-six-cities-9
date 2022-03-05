import { useEffect, useRef } from "react";
import leaflet from "leaflet";
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from "../../mocks/map.data";
import useMap from "../../hooks/useMap";
import { IOffer } from "../../types/interfaces/offer.interface";
import { ILocation } from "../../types/interfaces/map.interface";

type TMapView = {
  city: ILocation,
  offers: IOffer[],
  hoveredOffer: IOffer | undefined;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function MapView(props: TMapView): JSX.Element {
  const {city, offers, hoveredOffer} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  console.log('point', props.city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer: IOffer) => {
        const marker = leaflet.marker({
          lat: offer.location.lat,
          lng: offer.location.lng
        });

        marker
          .setIcon(hoveredOffer !== undefined && offer.id+offer.name === hoveredOffer.id+hoveredOffer.name ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, offers, hoveredOffer]);

  return (
    <section style={{overflow: 'hidden'}} className="cities__map map">
      <div style={{height: '500px'}} ref={mapRef} />
    </section>
  );
}