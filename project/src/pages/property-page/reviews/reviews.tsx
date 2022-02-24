import React from 'react';
import ReviewsForm from "../reviews-form/reviews-form";
import { IReview } from "../../../types/interfaces/reviews.interface";

export interface ReviewsProps {
  isLogged: boolean,
  reviewList: IReview[]
}

export function Reviews(props: ReviewsProps): JSX.Element {

  return (
    <section className="property__reviews reviews">
      {
        !!props.reviewList.length &&
          <>
            <h2 className="reviews__title">Reviews &middot;<span className="reviews__amount">{props.reviewList.length}</span></h2>
            <ul className="reviews__list">

              {
                props.reviewList.map((review) =>
                  <li className="reviews__item" key={review.id}>
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img
                          className="reviews__avatar user__avatar"
                          src={review.userAvatar}
                          width="54"
                          height="54"
                          alt={review.userAvatar}
                        />
                      </div>
                      <span className="reviews__user-name">{review.userName}</span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{width: `${review.toString()}%`}}/>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">{review.text}</p>
                      <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
                    </div>
                  </li>
                )
              }

            </ul>
          </>
      }

      {
        props.isLogged && <ReviewsForm/>
      }

    </section>
  );
}
