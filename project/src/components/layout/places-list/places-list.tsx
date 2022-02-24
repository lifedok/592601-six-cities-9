import React from 'react';
import PlaceCard from '../place-card/place-card';
import { IOffer } from '../../../types/interfaces/offer.interface';


type PlacesListProps = {
  list: IOffer[];
}

export default function PlacesList(props: PlacesListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        props.list.map((card) => <PlaceCard key={card.id} {...card}/>)
      }
    </div>
  );
}
