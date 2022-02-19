import { FavoritesCard } from "./favorites-card/favorites-card";
import { getFavorites } from "../favorites-data";
import { FavoritesCardProps } from "../favorites.interface";

export function FavoritesList() {

  const favoritesList = getFavorites();

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">

        {
          favoritesList.map((item: FavoritesCardProps) => {
            return (
              <li className="favorites__locations-items">
                <div className='favorites__locations locations locations--current'>
                  <div className="locations__item">
                    <a className="locations__item-link" href="link">
                      <span>{item.location}</span>
                    </a>
                  </div>
                </div>

                <div className="favorites__places">
                  {
                    item.cards.map((card) => <FavoritesCard {...card}/>)
                  }
                </div>
              </li>
            )
          })
        }
      </ul>
    </section>
  );
}
