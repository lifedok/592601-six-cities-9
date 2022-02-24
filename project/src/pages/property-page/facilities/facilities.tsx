import React from "react";

function Facility({children}: { children: React.ReactNode }) {
  return (
    <li className="property__inside-item">
      {children}
    </li>
  )
}

export function Facilities() {

  const facilityArray = ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'];
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {
          facilityArray.map(element => <Facility key={element}>{element}</Facility>)
        }
      </ul>
    </div>
  );
}
