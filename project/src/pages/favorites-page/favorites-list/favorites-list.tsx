import { FavoritesCard } from './favorites-card/favorites-card';
import { getFavorites } from '../../../mocks/favorites.data';
import { IFavoriteCardList } from "../../../types/interfaces/favorites.interface";

export function FavoritesList() {

  const favoritesList = getFavorites();

  const randomIndex = Math.floor(Math.random() * 1000);
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">

        {
          favoritesList.map((item: IFavoriteCardList) => (
            <li key={item.location + randomIndex} className="favorites__locations-items">
              <div className='favorites__locations locations locations--current'>
                <div className="locations__item">
                  <a className="locations__item-link" href="link">
                    <span>{item.location}</span>
                  </a>
                </div>
              </div>

              <div className="favorites__places">
                {
                  item.cards.map((card) => <FavoritesCard {...card} key={card.price}/>)
                }
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
