import React from 'react';
import { LocationItemInterface } from '../location-item/location-item.interface';
import LocationItem from '../location-item/location-item';

const list = (): LocationItemInterface[] => (
  [
    {
      city: 'Paris',
    },
    {
      city: 'Cologne',
    },
    {
      city: 'Brussels',
    },
    {
      city: 'Amsterdam',
    },
    {
      city: 'Hamburg',
    },
    {
      city: 'Dusseldorf',
    },
  ]
);

export default function LocationsList(): JSX.Element {


  return (
    <ul className="locations__list tabs__list">
      {
        list().map((item) => <LocationItem key={item.city} city={item.city}/>)
      }
    </ul>
  );
}
