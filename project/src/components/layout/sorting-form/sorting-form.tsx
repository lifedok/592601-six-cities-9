import React, { useState } from "react";
import { ESorting } from '../../../types/enums/sort-option-list.enum';


type SortingFormProps = {
  onSelectedSortType: (placeCardName: string) => void;
}

export default function SortingForm({onSelectedSortType}: SortingFormProps): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const [isSelectSort, setSelectSort] = useState('Popular');

  const selectedSortTypeHandler = (event: React.MouseEvent<HTMLElement>, sortType: string) => {
    event.preventDefault();
    setSelectSort(sortType);
    setOpen(false);

    onSelectedSortType && onSelectedSortType(sortType);
  };


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpen(!isOpen)}>
        {isSelectSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>


      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {
          Object.values(ESorting).map((sortType) => {
            return (
              <li
                onClick={(ev) => selectedSortTypeHandler(ev, sortType)}
                className={`places__option ${sortType === isSelectSort ? 'places__option--active' : ''}`}
                tabIndex={0}
                key={sortType}
              >
                {sortType}
              </li>
            )
          })
        }
      </ul>

    </form>
  );
}
