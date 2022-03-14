import React, { useState } from 'react';
import Header from '../../components/layout/header/header';
import Tabs from '../../components/layout/tabs/tabs';
import SortingForm from '../../components/layout/sorting-form/sorting-form';
import PlacesList from '../../components/layout/places-list/places-list';
import PlacesEmpty from '../../components/places-empty/places-empty';
import { offersMockData } from '../../mocks/offers.data';
import { useParams } from 'react-router';
import { IOffer, IPlace } from '../../types/interfaces/offer.interface';
import { placeList } from '../../mocks/places.data';

type MainPageProps = {
  renderMap: (location: IPlace, offers: IOffer[]) => React.ReactNode;
  onPlaceCardHover: (selectedOffer: string) => void
}

export default function MainPage({renderMap, onPlaceCardHover}: MainPageProps): JSX.Element {
  const [selectedCity, setSelectedCity] = useState<IPlace>(placeList[3]);

  const onSelectedTabItem = (city: string) => {
    const place = placeList.filter((item) => item.name === city)[0];
    setSelectedCity(place);
  };

  const {city} = useParams();
  const isCardPlace = true;
  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className={`page__main page__main--index ${!isCardPlace && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>

        <Tabs placeList={placeList} onSelectedTabItem={onSelectedTabItem}/>

        <div className="cities">

          {
            isCardPlace
              ?
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersMockData.length} place{offersMockData.length > 1 && 's'} to stay in {city}</b>

                  <SortingForm/>

                  <PlacesList list={offersMockData} onPlaceCardHover={onPlaceCardHover}/>

                </section>

                <div className="cities__right-section">
                  <section className="property__map map">
                    {renderMap(selectedCity, offersMockData)}
                  </section>
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
