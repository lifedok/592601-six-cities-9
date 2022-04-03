import { IHotel } from '../../../types/interfaces/hotel.interface';
import { getRatingFromFloatToPercentages } from '../../../helpers/hepler';
import { useAppDispatch } from '../../../hooks';
import { fetchCommentsAction, fetchNearbyHotelsAction } from '../../../store/api-actions';
import { redirectToRoute } from '../../../store/action';
import { ERoute } from '../../../types/enums/route.enum';

type PlaceCardProps = {
  hotel: IHotel;
  onPlaceCardHover?: (placeCardName: string) => void;
};

export default function PlaceCard({hotel, onPlaceCardHover}: PlaceCardProps): JSX.Element {
  const {id, isPremium, city, previewImage, price, rating, type} = hotel;

  const placeCardHoverHandler = (event: React.MouseEvent<HTMLElement>, key: number | string) => {
    event.preventDefault();

    onPlaceCardHover && onPlaceCardHover(key.toString());
  };


  const dispatch = useAppDispatch();
  const placeCardClickHandler = (ev: React.BaseSyntheticEvent, hotelId: number) => {
    ev.preventDefault();
    dispatch(fetchCommentsAction({hotelId: hotelId}));
    dispatch(fetchNearbyHotelsAction({hotelId: hotelId}));
    dispatch(redirectToRoute(`${ERoute.ROOM}/${hotelId}`));
  };

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={(ev) => placeCardHoverHandler(ev, id+city.name)}
      onClick={(ev) => placeCardClickHandler(ev, id)}
    >

      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <div>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt={previewImage}
          />
        </div>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
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
            <span style={{width: `${getRatingFromFloatToPercentages(rating).toString()}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <div>{city.name}</div>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
