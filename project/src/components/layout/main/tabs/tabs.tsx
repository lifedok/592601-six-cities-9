import React from 'react';
import LocationsList from './locations-list/locations-list';


export default function Tabs(): JSX.Element {

  // TODO: props for LocationsList should be here or above.

  return (
    <div className="tabs">
      <section className="locations container">

        <LocationsList />

      </section>
    </div>
  );
}
