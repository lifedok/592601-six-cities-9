import { changeLocationByLocationCity, changeLocationCity, hotelsData, loadHotels } from './hotels-data';
import { HotelsData } from '../../types/state';
import { makeFakeHotelArray, makeFakeInitialState } from '../../utils/mock';

const state: HotelsData = makeFakeInitialState;

describe('Check Reducers:', () => {

  it('--> without additional parameters should return initial state', () => {
    expect(hotelsData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('--> Check loadHotels', () => {
    const countHotels = 4;
    expect(hotelsData.reducer(state, loadHotels(makeFakeHotelArray(countHotels))))
      .toEqual({
        hotels: makeFakeHotelArray(countHotels),
      });
  });

  it('--> Check changeLocationCity', () => {
    const city = 'Amsterdam';
    expect(hotelsData.reducer(state, changeLocationCity({changedCity: city})))
      .toEqual({
        city: {
          name: city
        },
      });
  });

  it('--> Check changeLocationByLocationCity with the wrong answer', () => {
    const city = 'Amsterdam';
    expect(hotelsData.reducer(state, changeLocationByLocationCity({selectedLocationCity: city})))
      .toEqual({
        location: {
          latitude: 3,
          longitude: 2,
          zoom: 20
        },
      });
  });
});
// it('should increase number of mistakes with the wrong answer', () => {
//   const state = {step: 0, mistakes: 0};
//   const wrongArtistQuestionAnswer = 'unknown';
//   const wrongGenreQuestionAnswer = mockFakeGenreQuestion
//     .answers
//     .map((answer) => answer.genre !== mockFakeGenreQuestion.genre);
//
//   expect(gameProcess.reducer(state, checkUserAnswer({
//     question: mockArtistQuestion,
//     userAnswer: wrongArtistQuestionAnswer
//   })))
//     .toEqual({step: 0, mistakes: 1});
//
//   expect(gameProcess.reducer(state, checkUserAnswer({
//     question: mockFakeGenreQuestion,
//     userAnswer: wrongGenreQuestionAnswer
//   })))
//     .toEqual({step: 0, mistakes: 1});
// });

// it('should not increase mistakes with the correct answer', () => {
//   const state = {step: 0, mistakes: 0};
//   const {artist: correctlyArtistQuestionAnswer} = mockArtistQuestion.song;
//   const correctlyGenreQuestionAnswer = mockFakeGenreQuestion
//     .answers.map((answer) => answer.genre === mockFakeGenreQuestion.genre);
//
//   expect(gameProcess.reducer(state, checkUserAnswer({
//     question: mockArtistQuestion,
//     userAnswer: correctlyArtistQuestionAnswer
//   })))
//     .toEqual({step: 0, mistakes: 0});
//
//   expect(gameProcess.reducer(state, checkUserAnswer({
//     question: mockFakeGenreQuestion,
//     userAnswer: correctlyGenreQuestionAnswer
//   })))
//     .toEqual({step: 0, mistakes: 0});
// });
//
// it('should have reset game', () => {
//   expect(gameProcess.reducer({step: 5, mistakes: 1}, resetGame()))
//     .toEqual({step: 0, mistakes: 0});
//
//   expect(gameProcess.reducer({step: 0, mistakes: 0}, resetGame()))
//     .toEqual({step: 0, mistakes: 0});
//
//   expect(gameProcess.reducer({step: 2, mistakes: 0}, resetGame()))
//     .toEqual({step: 0, mistakes: 0});
// });

