import { IFavoriteCard } from '../../../../types/interfaces/favorites.interface';


export function FavoritesCard(props: IFavoriteCard) {

  const {isMark, name, previewImage, price, priceText, rating, type} = props;
  return (
    <article className="favorites__card place-card">

      {
        isMark &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }

      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="card">
          <img
            className="place-card__image"
            src={`${previewImage}`}
            width="150"
            height="110"
            alt="room-small"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{priceText}</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating.toString()}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="place">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
