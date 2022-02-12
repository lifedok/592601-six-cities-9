import React from "react";
import PlaceCard from "../../../shared/place-card/place-card";


type PlacesListProps = {
  count: number;
}

export default function PlacesList({count}: PlacesListProps): JSX.Element {

  const images: string[] = ['apartment-01', 'apartment-02', 'apartment-03', 'room'];
  const arrayCards = new Array(count).fill(null).map(() => (
    {
      image: images[Math.floor(Math.random() * images.length)]
    }
  ));

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        arrayCards.map((card, index) => <PlaceCard key={index} image={card.image}/>)
      }
    </div>
  )
}
