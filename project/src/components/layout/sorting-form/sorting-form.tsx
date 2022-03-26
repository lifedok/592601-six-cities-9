import React, { useState } from "react";
import { ESorting } from "../../../types/consts/sort-option-list";
import { sortingOffers } from "../../../store/action";
import { useAppDispatch, useAppSelector } from "../../../hooks";

export default function SortingForm(): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const [isSelectSort, setSelectSort] = useState(ESorting.POPULAR);
  const {offers} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const selectedOptionItem = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const selectedOption = event.currentTarget.innerText;
    setSelectSort(selectedOption);

    setOpen(false);
    dispatch(sortingOffers({sortType: selectedOption, offers: offers}));
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
                className={`places__option ${value === isSelectSort ? 'places__option--active' : ''}`}
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
