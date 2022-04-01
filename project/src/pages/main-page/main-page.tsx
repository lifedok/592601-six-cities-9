import React from 'react';
import Header from '../../components/layout/header/header';
import Tabs from '../../components/layout/tabs/tabs';
import SortingForm from '../../components/layout/sorting-form/sorting-form';
import PlacesList from '../../components/layout/places-list/places-list';
import PlacesEmpty from '../../components/places-empty/places-empty';
import { useNavigate } from 'react-router';
import {
  changeLocationByLocationCity,
  changeLocationCity,
  changeHotelsByLocationCity
} from '../../store/action';
import { useAppDispatch } from '../../hooks';
import { ERoute } from '../../types/enums/route.enum';
import { getCityList, useGetLocationCity, useGetHotels } from '../../store/selector';
import { IHotel, IPlace } from "../../types/interfaces/hotel.interface";

type MainPageProps = {
  renderMap: (location: IPlace, hotels: IHotel[]) => React.ReactNode;
  onPlaceCardHover: (selectedHotel: string) => void
}

export default function MainPage({renderMap, onPlaceCardHover}: MainPageProps): JSX.Element {
  const hotels = useGetHotels();
  const locationCity = useGetLocationCity();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSelectedTabItem = (city: string) => {
    dispatch(changeLocationCity({changedCity: city}));
    dispatch(changeLocationByLocationCity({selectedLocationCity: city}));
    dispatch(changeHotelsByLocationCity({selectedLocationCity: city}));
    navigate(`${ERoute.LOCATION}/${city}`);
  };

  const isCardPlace = true;
  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className={`page__main page__main--index ${!isCardPlace && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>

        <Tabs placeList={getCityList(hotels)} onSelectedTabItem={onSelectedTabItem}/>

        <div className="cities">

          {
            isCardPlace
              ?
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{hotels.length} place{hotels.length > 1 && 's'} to stay in {locationCity.name}</b>

                  <SortingForm />

                  <PlacesList list={hotels} onPlaceCardHover={onPlaceCardHover}/>

                </section>

                <div className="cities__right-section">
                  <section className="property__map map">
                    {renderMap(locationCity, hotels)}
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
