import {combineReducers} from '@reduxjs/toolkit';
import { EReducerNameSpace } from '../../types/const';
import { hotelsData } from './hotel-data/hotels-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [EReducerNameSpace.DATA]: hotelsData.reducer,
  [EReducerNameSpace.USER]: userProcess.reducer,
});
