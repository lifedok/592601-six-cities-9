import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ERoute } from '../../../types/enums/route.enum';
import { IPlace } from '../../../types/interfaces/offer.interface';

type TabsProps = {
  placeList: IPlace[],
  onSelectedTabItem?: (place: string) => void
}

export default function Tabs({placeList, onSelectedTabItem}: TabsProps): JSX.Element {

  const selectedTabItem = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onSelectedTabItem && onSelectedTabItem(event.currentTarget.innerText);
  };

  const param = useParams();
  return (
    <div className="tabs">
      <section className="locations container">

        <ul className="locations__list tabs__list">
          {
            placeList.map((place) => {
              const isActiveCity = param.city ? place.name === param.city : place.name === 'Amsterdam';
              const isActiveClass = isActiveCity && 'tabs__item--active';
              return (
                <li className="locations__item" onClick={(ev) => selectedTabItem(ev)} key={place.name}>
                  <Link className={`locations__item-link tabs__item ${isActiveClass}`} to={`${ERoute.LOCATION}/${place.name}`}>
                    <span>{place.name}</span>
                  </Link>
                </li>
              );
            })
          }
        </ul>

      </section>
    </div>
  );
}
