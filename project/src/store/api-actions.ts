import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { redirectToRoute } from './action';
import { ApiRoute, AuthorizationStatus, ERoute } from '../types/enums/route.enum';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { errorHandle } from '../services/error-handle';
import { IHotel } from '../types/interfaces/hotel.interface';
import { removeLoginUserName, saveLoginUserName } from '../services/login-user-name';
import { NewCommentData } from '../types/new-comment-data';
import { changeHotelsByLocationCity, changeLocationByLocationCity, changeLocationCity } from './reducer/hotels-tab';
import { loadCommentsHotel, loadFavoriteHotels, loadHotels, loadNearbyHotels } from './reducer/hotels-data';
import { requireAuthorization } from './reducer/user-process';

export const fetchHotelsAction = createAsyncThunk(
  'data/fetchHotels',
  async () => {
    const {data} = await api.get<IHotel[]>(ApiRoute.HOTELS);
    store.dispatch(loadHotels(data));
    const defaultChangedCity = 'Amsterdam';
    store.dispatch(changeLocationCity({changedCity: defaultChangedCity}));
    store.dispatch(changeLocationByLocationCity({selectedLocationCity: defaultChangedCity}));
    store.dispatch(changeHotelsByLocationCity({selectedLocationCity: defaultChangedCity}));
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/fetchInfoSelectedHotel',
  async ({hotelId: id}: {hotelId: number}) => {
    try {
      const {data} = await api.get(`${ApiRoute.COMMENTS}/${id}`);
      store.dispatch(loadCommentsHotel(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchNearbyHotelsAction = createAsyncThunk(
  'data/fetchNearbyHotels',
  async ({hotelId: id}: {hotelId: number}) => {
    try {
      const {data} = await api.get(`${ApiRoute.HOTELS}/${id}/nearby`) ;
      store.dispatch(loadNearbyHotels(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoriteHotelsAction = createAsyncThunk(
  'data/fetchFavoriteHotelsAction',
  async () => {
    const {data} = await api.get<IHotel[]>(ApiRoute.FAVORITES);
    store.dispatch(loadFavoriteHotels(data));
    store.dispatch(redirectToRoute(ERoute.FAVORITES));
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(ApiRoute.LOGIN);
      store.dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(ApiRoute.LOGIN, {email, password});
      saveToken(token);
      saveLoginUserName(email);
      store.dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      store.dispatch(redirectToRoute(ERoute.MAIN));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    }
  },
);

export const addCommentAction = createAsyncThunk(
  'user/addComment',
  async ({hotelId, comment, rating}: NewCommentData) => {
    try {
      const {data} = await api.post(`${ApiRoute.COMMENTS}/${hotelId}`, {comment, rating});
      store.dispatch(loadCommentsHotel(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(ApiRoute.LOGOUT);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
      store.dispatch(redirectToRoute(ERoute.LOGIN));
      removeLoginUserName();
    } catch (error) {
      errorHandle(error);
    }
  },
);
