import React, { FormEvent } from 'react';
import { addCommentAction } from '../../../store/api-actions';
import { useAppDispatch } from '../../../hooks';

type ReviewsFormProps = {
  hotelId: number
}
export default function ReviewsForm({hotelId}: ReviewsFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const MIN_CHART = 50;
  const MAX_CHART = 300;

  const [formData, setFormData] = React.useState({comment: '', rating: ''});

  const onChangeForm = (evt: React.FormEvent<EventTarget>) => {
    const {name, value} = evt.target as HTMLInputElement;
    setFormData({...formData, [name]: value});
  };

  const isValidLengthComment = formData.comment.length >= MIN_CHART && formData.comment.length <= MAX_CHART;
  const isFormFilled = () => !!formData.rating && !!formData.comment && isValidLengthComment;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!isFormFilled) {
      return;
    }
    dispatch(addCommentAction({
      hotelId: hotelId,
      comment: formData.comment,
      rating: Number(formData.rating),
    })).then(() => {
      setFormData({comment: '', rating: ''});
    });
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          onChange={onChangeForm}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          onChange={onChangeForm}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          onChange={onChangeForm}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          onChange={onChangeForm}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          onChange={onChangeForm}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={onChangeForm}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          &nbsp;&nbsp;{formData.comment.length}/300
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormFilled()}>Submit</button>
      </div>
    </form>
  );
}
