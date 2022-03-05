import { useEffect, useRef } from "react";
import leaflet from "leaflet";
import { ICity, IPoint } from "../../types/interfaces/map.interface";
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from "../../mocks/map.data";
import useMap from "../../hooks/useMap";

type TMapView = {
  city: ICity,
  points: IPoint[],
  selectedPoint: IPoint | undefined;
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
  const {city, points, selectedPoint} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  console.log('point', props.city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = leaflet.marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(selectedPoint !== undefined && point.title === selectedPoint.title ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <section ref={mapRef} style={{overflow: 'hidden'}} className="cities__map map"/>
  );
}
