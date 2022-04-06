import {combineReducers} from '@reduxjs/toolkit';
import { EReducerNameSpace } from '../../types/const';
import { userProcess } from './user-process';
import { hotelsData } from './hotels-data';
import { hotelsSort } from './hotels-sort';
import { hotelsTab } from './hotels-tab';

export const rootReducer = combineReducers({
  [EReducerNameSpace.DATA]: hotelsData.reducer,
  [EReducerNameSpace.USER]: userProcess.reducer,
  [EReducerNameSpace.TAB]: hotelsTab.reducer,
  [EReducerNameSpace.SORT]: hotelsSort.reducer,
});
