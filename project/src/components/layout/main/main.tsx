import Tabs from "./tabs/tabs";
import SortingForm from "./sorting-form/sorting-form";
import PlacesList from "./places-list/places-list";
import EmptyContainer from "./empty-container/empty-container";

type MainViewProps = {
  placesCard: number;
}

export default function Main({placesCard}: MainViewProps): JSX.Element {

  const isEmpty = false;
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <Tabs/>

      <div className="cities">

        {
          isEmpty
            ? <EmptyContainer/>
            :
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
        }
      </div>
    </main>
  );
}
