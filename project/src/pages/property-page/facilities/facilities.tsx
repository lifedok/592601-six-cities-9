import React from 'react';


type FacilitiesProps = {
  facilities: string[]
}

export function Facilities({facilities}: FacilitiesProps) {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {
          facilities.map((element) => (<Facility key={element}>{element}</Facility>))
        }
      </ul>
    </div>
  );
}


function Facility({children}: { children: React.ReactNode }) {
  return (
    <li className="property__inside-item">
      {children}
    </li>
  );
}
