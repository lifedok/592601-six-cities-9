import PlaceCard from '../../../components/layout/place-card/place-card';
import { IOffer } from '../../../types/interfaces/offer.interface';

export function NearPlacesList(props: {nearData: IOffer[]}) {

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>

        <div className="near-places__list places__list">
          {
            props.nearData.map((place) => <PlaceCard key={place.id} offer={place}/>)
          }
        </div>
      </section>
    </div>
  );
}
