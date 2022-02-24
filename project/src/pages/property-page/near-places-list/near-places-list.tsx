import { getNearPlaces } from "../../../mocks/near-places.data";
import { NearPlaceItem } from "./near-place-item/near-place-item";

export function NearPlacesList() {

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>


        <div className="near-places__list places__list">
          {
            getNearPlaces().nearPlaces.map((place) => <NearPlaceItem key={place.id} {...place}/>)
          }
        </div>
      </section>
    </div>
  );
}
