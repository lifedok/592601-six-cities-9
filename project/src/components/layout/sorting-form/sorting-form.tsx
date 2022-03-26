import React, { useState } from "react";
import { ESorting } from "../../../types/consts/sort-option-list";
import {
  sortingOffersByDefault,
  sortingOffersByHighToLow,
  sortingOffersByLowToHigh, sortingOffersByTopRatedFirst
} from "../../../store/action";
import { useAppDispatch, useAppSelector } from "../../../hooks";

export default function SortingForm(): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const [isSelectSort, setSelectSort] = useState(ESorting.POPULAR);
  const {offers} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();


  const sortingOffer = (sortType: string) => {
    const byDefault = dispatch(sortingOffersByDefault({offers: offers}));
    switch (sortType) {
      case ESorting.POPULAR:
        return byDefault;
      case ESorting.LOW_TO_HIGH:
        return dispatch(sortingOffersByLowToHigh({offers: offers}));
      case ESorting.HIGH_TO_LOW:
        return dispatch(sortingOffersByHighToLow({offers: offers}));
      case ESorting.TOP_RATED_FIRST:
        return dispatch(sortingOffersByTopRatedFirst({offers: offers}));
      default:
        return byDefault;
    }
  };


  const selectedOptionItem = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const selectedOption = event.currentTarget.innerText;
    setSelectSort(selectedOption);
    console.log('isSelectSort1', isSelectSort); // didn't update??? why
    console.log('selectedOption', selectedOption);
    setOpen(false);
    sortingOffer(selectedOption);
  };

  console.log('isSelectSort', isSelectSort);

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
