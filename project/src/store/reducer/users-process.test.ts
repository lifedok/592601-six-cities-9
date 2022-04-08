import { userProcess } from './user-process';
import { requireAuthorization } from './user-process';
import { AuthorizationStatus } from '../../types/enums/route.enum';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.UNKNOWN});
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};
    expect(userProcess.reducer(state, requireAuthorization(AuthorizationStatus.AUTH)))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH});
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};

    expect(userProcess.reducer(state, requireAuthorization(AuthorizationStatus.NO_AUTH)))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH});
  });
});
