import React, { useState } from "react";

export const ESorting = {
  POPULAR: 'Popular',
  LOW_TO_HIGH: 'Price: low to high',
  HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
};

export default function SortingForm(): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const [isSelectOption, setSelectOption] = useState(Object.keys(ESorting)[0]);


  const selectedOptionItem = (event: React.MouseEvent<HTMLElement>) => {

    event.preventDefault();
    const selectedOption = event.currentTarget.innerText;
    setOpen(false);
    setSelectOption(selectedOption);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpen(!isOpen)}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>


      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {
          Object.keys(ESorting).map((option, index) => {
            const value = Object.values(ESorting)[index];
            return (
              <li
                onClick={(ev) => selectedOptionItem(ev)}
                className={`places__option ${value === isSelectOption ? 'places__option--active' : ''}`}
                tabIndex={0}
                key={option}
              >
                {value}
              </li>
            )
          })
        }
      </ul>

    </form>
  );
}
