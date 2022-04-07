import { useLocation, useParams } from 'react-router-dom';
import Header from '../../components/layout/header/header';
import { NearPlacesList } from './near-places-list/near-places-list';
import React, { useEffect } from 'react';
import { Reviews } from './reviews/reviews';
import { MeetHostInfo } from './meet-host-info/meet-host-info';
import { Facilities } from './facilities/facilities';
import { getRatingFromFloatToPercentages } from '../../helpers/hepler';
import { useGetHotels } from '../../store/selector';
import { IHotel, IPlace } from '../../types/interfaces/hotel.interface';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus, ERoute } from '../../types/enums/route.enum';
import { redirectToRoute } from '../../store/action';


type PropertyPageProps = {
  renderMap: (location: IPlace, offers: IHotel[]) => React.ReactNode;
  onPlaceCardHover: (selectedOffer: string) => void
}

export default function PropertyPage({renderMap, onPlaceCardHover}: PropertyPageProps): JSX.Element {
  const hotels = useGetHotels();
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {comments, nearbyHotels} = useAppSelector(({DATA}) => DATA);
  const params = useParams();

  const hotelIds = hotels.map((hotel) => hotel.id);
  const dispatch = useAppDispatch();

  const isHasId = hotelIds.includes(Number(params.id));
  if (!isHasId) {
    dispatch(redirectToRoute(ERoute.MAIN));
    dispatch(redirectToRoute('/404'));
  }

  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const selectedHotel = hotels.filter((offer) => (offer.id.toString() === params.id))[0];
  const {isPremium, city, price, bedrooms, rating, maxAdults, images, type, host, description, goods, id} = selectedHotel;

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
                images.map((image: string) =>
                  (
                    <div
                      className="property__image-wrapper"
                      key={image}
                    >
                      <img className="property__image" src={image} alt="room"/>
                    </div>
                  ),
                )
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
                  {maxAdults} adult{maxAdults === 0 ? '' : 's'}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>

              <Facilities facilities={goods}/>

              <MeetHostInfo host={host} description={description}/>

              <Reviews isLogged={authorizationStatus === AuthorizationStatus.AUTH} reviewList={comments} hotelId={id}/>

            </div>
          </div>
          <section className="property__map map">
            {renderMap(city, hotels)}
          </section>
        </section>

        <NearPlacesList nearData={nearbyHotels} onPlaceCardHover={onPlaceCardHover}/>

      </main>
    </div>
  );
}
