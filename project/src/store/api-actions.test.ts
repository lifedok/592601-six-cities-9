import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api';
import { checkAuthAction, fetchHotelsAction, loginAction, logoutAction } from './api-actions';
import {State} from '../types/state';
import { ApiRoute } from '../types/enums/route.enum';
import { requireAuthorization } from './reducer/user-process';
import { AuthData } from "../types/auth-data";
import { makeFakeHotelsMockData } from "../utils/mock";
import { loadHotels } from "./reducer/hotels-data";

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(ApiRoute.LOGIN)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);
    await store.dispatch(checkAuthAction());
    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(requireAuthorization.toString());
  });


  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: '123456'};

    mockAPI
      .onPost(ApiRoute.LOGIN)
      .reply(200, {token: 'secret'});

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();
    await store.dispatch(loginAction(fakeUser));
    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(requireAuthorization.toString());
    expect(Storage.prototype.setItem).toBeCalledTimes(2);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', 'secret');
  });

  it('should dispatch Load_Hotels when GET /hotels', async () => {
    const mockHotels = [makeFakeHotelsMockData()];
    mockAPI
      .onGet(ApiRoute.HOTELS)
      .reply(200, mockHotels);
    const store = mockStore();
    await store.dispatch(fetchHotelsAction());
    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(loadHotels.toString());
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(ApiRoute.LOGOUT)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();
    await store.dispatch(logoutAction());
    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(requireAuthorization.toString());
    expect(Storage.prototype.removeItem).toBeCalledTimes(2);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-token');
  });
});
