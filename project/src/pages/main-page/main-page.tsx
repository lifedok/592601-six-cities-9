import React from 'react';
import Header from '../../components/layout/header/header';
import Tabs from "../../components/layout/tabs/tabs";
import SortingForm from "../../components/layout/sorting-form/sorting-form";
import PlacesList from "../../components/layout/places-list/places-list";
import PlacesEmpty from "../../components/places-empty/places-empty";

const PlacesCard = {
  COUNT: 5,
};

export default function MainPage(): JSX.Element {
  const isCardPlace = true;
  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className={`page__main page__main--index ${!isCardPlace && 'page__main--index-empty'}`}>
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

                  <PlacesList count={PlacesCard.COUNT}/>

                </section>

                <div className="cities__right-section">
                  <section className="cities__map map"/>
                </div>
              </div>
              :
              <PlacesEmpty/>
          }
        </div>
      </main>

    </div>
  );
}
