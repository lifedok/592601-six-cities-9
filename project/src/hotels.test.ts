import { userProcess } from './store/reducer/user-process/user-process';
import { AuthorizationStatus } from './types/enums/route.enum';

describe('-> Check userProcess:', () => {
  it('--> Initial state for authorizationStatus', () => {
    expect(userProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
      });
  });
});
