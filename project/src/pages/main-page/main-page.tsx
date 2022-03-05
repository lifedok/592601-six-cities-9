import React, { useState } from 'react';
import Header from '../../components/layout/header/header';
import Tabs from '../../components/layout/tabs/tabs';
import SortingForm from '../../components/layout/sorting-form/sorting-form';
import PlacesList from '../../components/layout/places-list/places-list';
import PlacesEmpty from '../../components/places-empty/places-empty';
import { offersMockData } from '../../mocks/offers.data';
import { CITY, POINTS } from "../../mocks/map.data";
import MapView from "../../components/map-view/map-view";
import { IPoint } from "../../types/interfaces/map.interface";
import { useParams } from "react-router";


export default function MainPage(): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<IPoint | undefined>(undefined);

  const onPlaceCardHover = (placeCardName: string) => {
    const currentPoint = offersMockData.find((point) => {

      console.log('placeCardName', placeCardName);
      return point.name === placeCardName
    });

    console.log('currentPoint', currentPoint);

    // setSelectedPoint(currentPoint);
  };

  const {city} = useParams();
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
                  <b className="places__found">312 places to stay in {city}</b>

                  <SortingForm/>

                  <PlacesList list={offersMockData} onPlaceCardHover={onPlaceCardHover}/>

                </section>

                <div className="cities__right-section">
                  <MapView city={CITY} points={POINTS} selectedPoint={selectedPoint}/>
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
