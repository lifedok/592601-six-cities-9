import React from 'react';
import PlaceCard from '../place-card/place-card';
import { getOffers } from "../../../mocks/offers.data";


type PlacesListProps = {
  count: number;
}

export default function PlacesList({count}: PlacesListProps): JSX.Element {

  const images: string[] = ['apartment-01', 'apartment-02', 'apartment-03', 'room'];
  const arrayCards = new Array(count).fill(null).map(() => (
    {
      id: Math.floor(Math.random() * 1200),
      image: images[Math.floor(Math.random() * images.length)],
    }
  ));

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        getOffers().map((card) => <PlaceCard key={card.id} {...card}/>)
      }
    </div>
  );
}
