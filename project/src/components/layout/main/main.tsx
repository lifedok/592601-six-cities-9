import Tabs from "./tabs/tabs";
import SortingForm from "./sorting-form/sorting-form";
import PlacesList from "./places-list/places-list";
import PlacesEmpty from "../../places-empty/places-empty";

type MainViewProps = {
  placesCard: number;
}

export default function Main({placesCard}: MainViewProps): JSX.Element {

  const isCardPlace = true;
  // TODO: use switch by class
  const isCardPlaceStyle = isCardPlace ? 'page__main page__main--index' : 'page__main page__main--index page__main--index-empty';
  return (
    <main className={isCardPlaceStyle}>
      <h1 className="visually-hidden">Cities</h1>

      <Tabs/>


      <div className="cities">

        {
          isCardPlace
            ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">312 places to stay in Amsterdam</b>


                <SortingForm/>


                <PlacesList count={placesCard}/>

              </section>

              <div className="cities__right-section">
                <section className="cities__map map"></section>
              </div>
            </div>
            :
            <PlacesEmpty/>
        }
      </div>
    </main>
  );
}
