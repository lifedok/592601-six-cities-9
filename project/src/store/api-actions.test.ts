import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api';
import {
  checkAuthAction,
  fetchCommentsAction,
  fetchHotelsAction,
  fetchNearbyHotelsAction,
  loginAction,
  logoutAction
} from './api-actions';
import {State} from '../types/state';
import { ApiRoute } from '../types/enums/route.enum';
import { requireAuthorization } from './reducer/user-process/user-process';
import { AuthData } from '../types/auth-data';
import { makeFakeHotelsMockData } from '../utils/mock';
import { loadCommentsHotel, loadHotels, loadNearbyHotels } from './reducer/hotel-data/hotels-data';

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

  it('should dispatch Load_nearby hotels when GET /hotels/id/nearby', async () => {
    const mockHotels = [makeFakeHotelsMockData()];
    const fakeHotelId = 36;
    mockAPI
      .onGet(`${ApiRoute.HOTELS}/${fakeHotelId}/nearby`)
      .reply(200, mockHotels);
    const store = mockStore();
    await store.dispatch(fetchNearbyHotelsAction({hotelId: fakeHotelId}));
    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(loadNearbyHotels.toString());
  });

  it('should dispatch Load_comments hotels when GET /comments/id', async () => {
    const mockHotels = [makeFakeHotelsMockData()];
    const fakeHotelId = 36;
    mockAPI
      .onGet(`${ApiRoute.COMMENTS}/${fakeHotelId}`)
      .reply(200, mockHotels);
    const store = mockStore();
    await store.dispatch(fetchCommentsAction({hotelId: fakeHotelId}));
    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(loadCommentsHotel.toString());
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
