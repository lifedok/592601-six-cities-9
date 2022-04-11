import React from 'react';
import { useParams } from 'react-router-dom';
import { IPlace } from '../../../types/interfaces/hotel.interface';

type TabsProps = {
  placeList: IPlace[],
  onSelectedTabItem?: (place: string) => void
}

export default function Tabs({placeList, onSelectedTabItem}: TabsProps): JSX.Element {

  const selectedTabItemHandler = (event: React.MouseEvent<HTMLElement>) => {
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
              const isActiveClass = isActiveCity ? 'tabs__item--active' : '';
              return (
                <li onClick={(ev) => selectedTabItemHandler(ev)} key={place.name} style={{cursor: isActiveCity ? 'default' : 'pointer'}}>
                  <div className={`locations__item-link tabs__item ${isActiveClass}`}>
                    <span>{place.name}</span>
                  </div>
                </li>
              );
            })
          }
        </ul>

      </section>
    </div>
  );
}
