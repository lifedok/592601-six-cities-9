import React from 'react';
import PlaceCard from '../place-card/place-card';
import { IHotel } from "../../../types/interfaces/hotel.interface";


type PlacesListProps = {
  list: IHotel[];
  onPlaceCardHover: (placeCardName: string) => void;
}

export default function PlacesList(props: PlacesListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        props.list.map((card) => <PlaceCard key={card.id+card.city.name} hotel={card} onPlaceCardHover={props.onPlaceCardHover}/>)
      }
    </div>
  );
}
