import React from 'react';
import LocationsList from './locations-list/locations-list';


export default function Tabs(): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">

        <LocationsList />

      </section>
    </div>
  );
}
