import { changeLocationCity, hotelsData, loadHotels } from './hotels-data';
import { HotelsData } from '../../../types/state';
import { makeFakeHotelArray, makeFakeInitialState } from '../../../utils/mock';

const state: HotelsData = makeFakeInitialState;

describe('Check Reducers:', () => {

  it('--> without additional parameters should return initial state', () => {
    expect(hotelsData.reducer(void 0, {type: 'UNKNOWN_ACTION'})).toEqual(state);
  });

  it('--> Check loadHotels', () => {
    const countHotels = 4;
    expect(hotelsData.reducer(state, loadHotels(makeFakeHotelArray(countHotels))).hotels)
      .toEqual(makeFakeHotelArray(countHotels));
  });

  it('--> Check changeLocationCity', () => {
    const city = 'Amsterdam';
    expect(hotelsData.reducer(state, changeLocationCity({changedCity: city})).city.name)
      .toEqual(city);
  });
});
