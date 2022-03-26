import React from 'react';
import Header from '../../components/layout/header/header';
import Tabs from '../../components/layout/tabs/tabs';
import SortingForm from '../../components/layout/sorting-form/sorting-form';
import PlacesList from '../../components/layout/places-list/places-list';
import PlacesEmpty from '../../components/places-empty/places-empty';
import { useNavigate } from 'react-router';
import { IOffer, IPlace } from '../../types/interfaces/offer.interface';
import { changeLocationByLocationCity, changeLocationCity, changeOffersByLocationCity } from "../../store/action";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { ERoute } from "../../types/enums/route.enum";
import { getCityList } from "../../helpers/hepler";

type MainPageProps = {
  renderMap: (location: IPlace, offers: IOffer[]) => React.ReactNode;
  onPlaceCardHover: (selectedOffer: string) => void
}

export default function MainPage({renderMap, onPlaceCardHover}: MainPageProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {locationCity, offers} = useAppSelector((state) => state);

  const onSelectedTabItem = (city: string) => {
    dispatch(changeLocationCity({changedCity: city}));
    dispatch(changeLocationByLocationCity({selectedLocationCity: city}));
    dispatch(changeOffersByLocationCity({selectedLocationCity: city}));
    navigate(`${ERoute.LOCATION}/${city}`);
  };

  const isCardPlace = true;
  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className={`page__main page__main--index ${!isCardPlace && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>

        <Tabs placeList={getCityList} onSelectedTabItem={onSelectedTabItem}/>

        <div className="cities">

          {
            isCardPlace
              ?
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offers.length} place{offers.length > 1 && 's'} to stay in {locationCity.name}</b>

                  <SortingForm/>

                  <PlacesList list={offers} onPlaceCardHover={onPlaceCardHover}/>

                </section>

                <div className="cities__right-section">
                  <section className="property__map map">
                    {renderMap(locationCity, offers)}
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
