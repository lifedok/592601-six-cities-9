import React from 'react';
import { LocationItemInterface } from '../location-item/location-item.interface';
import LocationItem from '../location-item/location-item';


export default function LocationsList(): JSX.Element {


  const list = (): LocationItemInterface[] => {
    return (
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
          isActive: true,
        },
        {
          city: 'Hamburg',
        },
        {
          city: 'Dusseldorf',
        }
      ]
    );
  };

  return (
    <ul className="locations__list tabs__list">
      {
        list().map((item, index) => {
          return (
            <LocationItem key={'i'+index} city={item.city} isActive={item.isActive}/>
          )
        })
      }
    </ul>
  );
}
