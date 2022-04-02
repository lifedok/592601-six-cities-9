import { useLocation, useParams } from 'react-router-dom';
import Header from '../../components/layout/header/header';
import { NearPlacesList } from './near-places-list/near-places-list';
import React, { useEffect } from 'react';
import { Reviews } from './reviews/reviews';
import { MeetHostInfo } from './meet-host-info/meet-host-info';
import { Facilities } from './facilities/facilities';
import { meetHostInfoMockData } from '../../mocks/meet-host-info-mock.data';
import { reviewListData } from '../../mocks/reviews-mock.data';
import { getRatingFromFloatToPercentages } from '../../helpers/hepler';
import { useGetLocationCity, useGetHotels } from '../../store/selector';
import { IHotel, IPlace } from '../../types/interfaces/hotel.interface';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../types/enums/route.enum';


type PropertyPageProps = {
  renderMap: (location: IPlace, offers: IHotel[]) => React.ReactNode;
  onPlaceCardHover: (selectedOffer: string) => void
}

export default function PropertyPage({renderMap, onPlaceCardHover}: PropertyPageProps): JSX.Element {
  const hotels = useGetHotels();
  const nearPlaces = hotels.slice(0, 3);
  const locationCity = useGetLocationCity();
  const { authorizationStatus, comments, selectedOfferHotel, nearbyHotels } = useAppSelector((state) => state);

  const isLogged = authorizationStatus === AuthorizationStatus.AUTH;
  const params = useParams();


  // const selectedOfferHotel: IHotel = useAppSelector((state) => state.selectedOfferHotel);

  console.log('selectedOfferHotel', selectedOfferHotel);
  const selectedHotel = hotels.filter((offer) => (offer.id.toString() === params.id))[0];
  const {isPremium, city, price, bedrooms, rating, maxAdults, images, type} = selectedHotel;

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className="page">

      {
        <Header/>
      }

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                selectedOfferHotel?.images.map((image: string) => <div className="property__image-wrapper" key={image}><img className="property__image" src={image} alt="room"/></div>)
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {city.name}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getRatingFromFloatToPercentages(rating).toString()}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedroom{bedrooms === 0 ? '' : 's'}
                </li>
                <li className="property__feature property__feature--adults">
                  {maxAdults} 4 adult{maxAdults === 0 ? '' : 's'}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>

              <Facilities/>

              <MeetHostInfo {...meetHostInfoMockData}/>

              <Reviews isLogged={isLogged} reviewList={comments} onPlaceCardHover={onPlaceCardHover}/>

            </div>
          </div>
          <section className="property__map map">
            {renderMap(locationCity, hotels)}
          </section>
        </section>

        <NearPlacesList nearData={nearbyHotels} onPlaceCardHover={onPlaceCardHover}/>

      </main>
    </div>
  );
}
