import {configureMockStore} from '@jedmao/redux-mock-store';
import {AnyAction} from 'redux';
import {redirect} from './redirect';
import { State } from "../types/state";
import { redirectToRoute } from "../store/action";
import { ERoute } from "../types/enums/route.enum";

const fakeHistory = {
  location: {pathname: ''},
  push(path: string) {
    this.location.pathname = path;
  },
};

jest.mock('../browser-history', () => fakeHistory);

const middlewares = [redirect];
const mockStore = configureMockStore<State, AnyAction>(middlewares);
const store = mockStore();

describe('Middleware: redirect', () => {
  beforeEach(() => {
    fakeHistory.push('');
  });

  it('should be redirect to /login', () => {
    store.dispatch(redirectToRoute(ERoute.LOGIN));
    expect(fakeHistory.location.pathname).toBe(ERoute.LOGIN);
    expect(store.getActions()).toEqual([
      redirectToRoute(ERoute.LOGIN),
    ]);
  });

  it('should not to be redirect /MAIN because not authorization', () => {
    store.dispatch({type: 'UNKNOWN_ACTION', payload: ERoute.FAVORITES});
    expect(fakeHistory.location.pathname).not.toBe(ERoute.FAVORITES);
  });
});
