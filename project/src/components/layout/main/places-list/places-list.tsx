import React from "react";
import PlaceCard from "../../../shared/place-card/place-card";

export default function PlacesList(): JSX.Element {

  const arrayCard = new Array(5).fill(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        arrayCard.map((_, index) => <PlaceCard key={index}/>)
      }
    </div>
  )
}
