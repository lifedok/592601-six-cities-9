import { Link } from "react-router-dom";
import { ERoute } from "../../../../types/enums/route.enum";
import { INearPlaceItem } from "../../../../types/interfaces/near-places.interface";

export function NearPlaceItem(props: INearPlaceItem) {

  const {isMark, name, previewImage, price, priceText, rating, type} = props;

  return (
    <article className="near-places__card place-card">

      {
        isMark &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }

      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`${ERoute.ROOM}/${props.id}`}>
          <img
            className="place-card__image"
            src={`${previewImage}`}
            width="260"
            height="200"
            alt={`${previewImage}`}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{priceText}</span>
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
            <span style={{width: `${rating.toString()}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${ERoute.ROOM}/${props.id}`}>{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
