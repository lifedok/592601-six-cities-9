import { FavoritesCard } from './favorites-card/favorites-card';
import { IFavoriteCardList } from '../../../types/interfaces/favorites.interface';
import React from 'react';


type FavoritesListProps = {
  list: IFavoriteCardList[];
}

export function FavoritesList({list}: FavoritesListProps): JSX.Element {

  const randomIndex = Math.floor(Math.random() * 1000);
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">

        {
          list.map((item: IFavoriteCardList) => (
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
