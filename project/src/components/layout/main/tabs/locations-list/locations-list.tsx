import { LocationItemInterface } from "../location-item/location-item.interface";
import LocationItem from "../location-item/location-item";
import React from "react";


export default function LocationsList(): JSX.Element {


  const list = (): LocationItemInterface[] => {
    return (
      [
        {
          city: 'Paris'
        },
        {
          city: 'Cologne'
        },
        {
          city: 'Brussels'
        },
        {
          city: 'Amsterdam',
          isActive: true
        },
        {
          city: 'Hamburg'
        },
        {
          city: 'Dusseldorf'
        }
      ]
    )
  };

  console.log('list', list());

  return (
    <ul className="locations__list tabs__list">
      {
        list().map((item, index) => {
          return (
            <LocationItem key={index} city={item.city} isActive={item.isActive}/>
          )
        })
      }
    </ul>
  )
}
