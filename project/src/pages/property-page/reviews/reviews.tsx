import React from 'react';
import ReviewsForm from '../reviews-form/reviews-form';
import { IComment } from '../../../types/interfaces/comments.interface';
import { getRatingFromFloatToPercentages } from '../../../helpers/hepler';

export interface ReviewsProps {
  isLogged: boolean,
  reviewList: IComment[],
  onPlaceCardHover: (placeCardName: string) => void;
}

export function Reviews({isLogged, reviewList, onPlaceCardHover}: ReviewsProps): JSX.Element {

  const placeCardHoverHandler = (event: React.MouseEvent<HTMLElement>, key: number | string) => {
    event.preventDefault();

    onPlaceCardHover && onPlaceCardHover(key.toString());
  };

  return (
    <section className="property__reviews reviews">
      {
        !!reviewList.length &&
        <>
          <h2 className="reviews__title">Reviews &middot;
            <span className="reviews__amount">{reviewList.length}</span>
          </h2>
          <ul className="reviews__list">

            {
              reviewList.map((review) => (
                <li className="reviews__item" key={review.id} onMouseEnter={(ev) => placeCardHoverHandler(ev, review.user.name)}>
                  <div className="reviews__user user">
                    <div className="reviews__avatar-wrapper user__avatar-wrapper">
                      <img
                        className="reviews__avatar user__avatar"
                        src={review.user.avatarUrl}
                        width="54"
                        height="54"
                        alt={review.user.avatarUrl}
                      />
                    </div>
                    <span className="reviews__user-name">{review.user.name}</span>
                  </div>
                  <div className="reviews__info">
                    <div className="reviews__rating rating">
                      <div className="reviews__stars rating__stars">
                        <span style={{width: `${getRatingFromFloatToPercentages(review.rating).toString()}%`}}/>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <p className="reviews__text">{review.comment}</p>
                    <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
                  </div>
                </li>
              ))
            }
          </ul>
        </>
      }
      {
        isLogged && <ReviewsForm/>
      }
    </section>
  );
}
