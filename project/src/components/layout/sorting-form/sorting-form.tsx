import React, { useState } from "react";
import { ESorting } from "../../../types/enums/sort-option-list.enum";
import {
  changeLocationCity,
  sortingOffers, sortOffers,
} from "../../../store/action";
import { useAppDispatch } from '../../../hooks';

export default function SortingForm(): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const [isSelectSort, setSelectSort] = useState(ESorting.POPULAR);
  // const {offers} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();


  // const sortingOffer = (sortType: string) => {
  //   const byDefault = dispatch(sortingOffersByDefault({offers: offers}));
  //   switch (sortType) {
  //     case ESorting.POPULAR:
  //       return byDefault;
  //     case ESorting.LOW_TO_HIGH:
  //       return dispatch(sortingOffersByLowToHigh({offers: offers}));
  //     case ESorting.HIGH_TO_LOW:
  //       return dispatch(sortingOffersByHighToLow({offers: offers}));
  //     case ESorting.TOP_RATED_FIRST:
  //       return dispatch(sortingOffersByTopRatedFirst({offers: offers}));
  //     default:
  //       return byDefault;
  //   }
  // };


  const selectedOptionItem = (event: React.MouseEvent<HTMLElement>, sortType: string) => {
    event.preventDefault();
    // const selectedOption = event.currentTarget.innerText;
    setSelectSort(sortType);
    setOpen(false);
    const  Paris = dispatch(changeLocationCity({changedCity: 'Paris'}));
    const  Paris2 = dispatch(sortOffers({type: sortType}));
    console.log('sortType', sortType);
    console.log('Paris', Paris);
    console.log('Paris2', Paris2);
    // sortingOffer(selectedOption);
    // dispatch(sortingOffers({sortType: sortType}));
    console.log('dispatch', dispatch);
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
            // const value = Object.values(ESorting)[index];
            return (
              <li
                onClick={(ev) => selectedOptionItem(ev, sortType)}
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
