import { Link } from 'react-router-dom';
import { ERoute } from '../../../../types/enums/route.enum';
import { INearPlaceItem } from '../../../../types/interfaces/near-places.interface';

export function NearPlaceItem(props: INearPlaceItem) {

  return (
    <article className="near-places__card place-card">

      {
        props.isMark &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }

      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`${ERoute.ROOM}/${props.id}`}>
          <img
            className="place-card__image"
            src={`${props.previewImage}`}
            width="260"
            height="200"
            alt={`${props.previewImage}`}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{props.priceText}</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${props.rating.toString()}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${ERoute.ROOM}/${props.id}`}>{props.name}</Link>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}
