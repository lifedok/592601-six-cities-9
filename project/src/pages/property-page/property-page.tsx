import { useLocation, useParams } from 'react-router-dom';
import Header from '../../components/layout/header/header';
import { NearPlacesList } from './near-places-list/near-places-list';
import { useEffect } from 'react';
import { Reviews } from './reviews/reviews';
import { getReviewList } from '../../mocks/reviews.data';
import { MeetHostInfo } from './meet-host-info/meet-host-info';
import { Facilities } from './facilities/facilities';
import { getMeetHostInfo } from '../../mocks/meet-host-info.data';
import { offersMockData } from '../../mocks/offers.data';
import { nearPlacesMockData } from '../../mocks/near-places.data';

const getRating = (rating: number) => (rating / 100 * 5).toFixed(1);

export default function PropertyPage(): JSX.Element {
  const isLogged = true;
  const reviewList = getReviewList();
  const meetHostInfo = getMeetHostInfo();

  const params = useParams();
  const selectedOffer = offersMockData.filter((offer) => (offer.id.toString() === params.id))[0];
  const {isMark, name, price, priceText, rating, type} = selectedOffer;

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="page">

      {
        <Header isLogged={isLogged}/>
      }

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src="img/room.jpg" alt="room"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="apartment 01"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-02.jpg" alt="apartment 02"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-03.jpg" alt="apartment 03"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/studio-01.jpg" alt="apartment 01"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="apartment 01"/>
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">

              {
                isMark &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {name}
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
                  <span style={{width: `${rating.toString()}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{getRating(rating)}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;{priceText}</span>
              </div>

              <Facilities/>

              <MeetHostInfo {...meetHostInfo}/>

              <Reviews isLogged={isLogged} reviewList={reviewList}/>

            </div>
          </div>
          <section className="property__map map"/>
        </section>

        <NearPlacesList nearData={nearPlacesMockData}/>

      </main>
    </div>
  );
}
