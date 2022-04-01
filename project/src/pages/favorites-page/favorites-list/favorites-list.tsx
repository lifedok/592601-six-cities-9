import React from 'react';
import { FavoritesCard } from './favorites-card/favorites-card';
import { IHotel } from '../../../types/interfaces/hotel.interface';


type FavoritesListProps = {
  list: IHotel[];
}

export function FavoritesList({list}: FavoritesListProps): JSX.Element {

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">

        {
          list.map((item: IHotel) => (
            <li key={item.city.name + item.id} className="favorites__locations-items">
              <div className='favorites__locations locations locations--current'>
                <div className="locations__item">
                  <a className="locations__item-link" href="link">
                    <span>{item.city.name}</span>
                  </a>
                </div>
              </div>

              <div className="favorites__places">
                {
                  list.map((hotel) => <FavoritesCard {...hotel} key={hotel.id}/>)
                }
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
