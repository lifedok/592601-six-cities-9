import React, { useState } from 'react';
import Header from '../../components/layout/header/header';
import Tabs from '../../components/layout/tabs/tabs';
import SortingForm from '../../components/layout/sorting-form/sorting-form';
import PlacesList from '../../components/layout/places-list/places-list';
import PlacesEmpty from '../../components/places-empty/places-empty';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ERoute } from '../../types/enums/route.enum';
import {
  getCityList, useGetHotels,
  useGetLocationCity,
  useGetSelectedHotels,
  useGetSortingHotels
} from '../../store/selector';
import { IHotel } from '../../types/interfaces/hotel.interface';
import { changeHotelsByLocationCity, changeLocationByLocationCity, changeLocationCity } from '../../store/reducer/hotel-data/hotels-data';
import MapView from '../../components/map-view/map-view';
import { getSortingHotels } from "../../store/get-sorting-hotels";


export default function MainPage(): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<IHotel | undefined>(undefined);
  const hotels = useGetHotels();
  const sortingHotels = useGetSortingHotels();
  const selectedHotels = useGetSelectedHotels();
  const locationCity = useGetLocationCity();
  const {isDataLoaded } = useAppSelector(({DATA}) => DATA);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();


  const onSelectedTabItem = (city: string) => {
    dispatch(changeLocationCity({changedCity: city}));
    dispatch(changeLocationByLocationCity({selectedLocationCity: city}));
    dispatch(changeHotelsByLocationCity({selectedLocationCity: city}));
    navigate(`${ERoute.LOCATION}/${city}`);
  };

  const onPlaceCardHover = (placeCardName: string) => {
    const currentPoint = hotels.find((hotel) => (hotel.id+hotel.city.name).toString() === placeCardName);
    setSelectedPoint(currentPoint);
  };
  const isShowContent = isDataLoaded && !!selectedHotels.length;

  const [sortHotels, setSortHotels] = useState<any>(selectedHotels);

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className={`page__main page__main--index ${!isShowContent && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>

        <Tabs placeList={getCityList(hotels)} onSelectedTabItem={onSelectedTabItem}/>

        <div className="cities">

          {
            isShowContent
              ?
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{selectedHotels.length} place{selectedHotels.length > 1 && 's'} to stay in {locationCity.name}</b>

                  <SortingForm onClick={(sortType) => {
                    const selectedSortHotels = getSortingHotels(sortType, [...selectedHotels]);
                    setSortHotels(selectedSortHotels);
                  }}/>

                  <PlacesList list={sortHotels} onPlaceCardHover={onPlaceCardHover}/>

                </section>

                <div className="cities__right-section">
                  <section className="property__map map">
                    <MapView
                      hotels={sortingHotels}
                      city={locationCity}
                      hoveredOffer={selectedPoint}
                    />
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
