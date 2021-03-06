import React, { memo, useState } from 'react';
import { ESorting } from '../../../types/enums/sort-option-list.enum';

type SortingFormType = {
  onClick: (sortType: string) => void;
}
function SortingForm({onClick}: SortingFormType): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const [isSelectSort, setSelectSort] = useState(ESorting.POPULAR);

  const selectedSortTypeHandler = (sortType: string) => {
    setSelectSort(sortType);
    setOpen(false);
    onClick(sortType);
  };

  const toggleSort = () => {
    setOpen(!isOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => toggleSort()}>
        {isSelectSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>


      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {
          Object.values(ESorting).map((sortType) => (
            <li
              onClick={() => selectedSortTypeHandler(sortType)}
              className={`places__option ${sortType === isSelectSort ? 'places__option--active' : ''}`}
              tabIndex={0}
              key={sortType}
            >
              {sortType}
            </li>
          ))
        }
      </ul>

    </form>
  );
}

export default memo(SortingForm);
