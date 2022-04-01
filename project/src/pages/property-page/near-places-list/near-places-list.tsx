import PlaceCard from '../../../components/layout/place-card/place-card';
import { IHotel } from '../../../types/interfaces/hotel.interface';

type NearPlacesListProps = {
  nearData: IHotel[];
  onPlaceCardHover: (placeCardName: string) => void;
}

export function NearPlacesList({nearData, onPlaceCardHover}: NearPlacesListProps) {

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>

        <div className="near-places__list places__list">
          {
            nearData.map((place) => <PlaceCard key={place.id} hotel={place} onPlaceCardHover={onPlaceCardHover}/>)
          }
        </div>
      </section>
    </div>
  );
}
