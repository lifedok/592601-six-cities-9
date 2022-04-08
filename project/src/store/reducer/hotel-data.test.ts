import { userProcess } from "./user-process";
import { AuthorizationStatus } from "../../types/enums/route.enum";
import { hotelsData, initialState, loadHotels } from "./hotels-data";
import { HotelsData } from "../../types/state";
import { makeFakeHotelArray, makeFakeHotelsMockData } from "../../utils/mock";

// const mockHotelList = makeFakeHotelArray();
// const mockHotelsMockData = makeFakeHotelsMockData();

describe('Check Reducers:', () => {
  describe('-> Check userProcess:', () => {
    it('--> Initial state for authorizationStatus', () => {
      expect(userProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
        .toEqual({
          authorizationStatus: AuthorizationStatus.UNKNOWN,
        });
    });
  });

  describe('-> Check HotelsData:', () => {
    it('--> Initial state for empty state', () => {
      const state = initialState as HotelsData;
      const countHotels = 4;
      expect(hotelsData.reducer(state, loadHotels(makeFakeHotelArray(countHotels))))
        .toEqual({
          hotels: makeFakeHotelArray(countHotels),
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
  });
});
