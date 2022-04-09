import { createAsyncThunk } from '@reduxjs/toolkit';
import { redirectToRoute } from './action';
import { ApiRoute, AuthorizationStatus, ERoute } from '../types/enums/route.enum';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { errorHandle } from '../services/error-handle';
import { IHotel } from '../types/interfaces/hotel.interface';
import { removeLoginUserName, saveLoginUserName } from '../services/login-user-name';
import { NewCommentData } from '../types/new-comment-data';
import {
  changeHotelsByLocationCity,
  changeLocationByLocationCity,
  changeLocationCity,
  loadCommentsHotel,
  loadFavoriteHotels,
  loadHotels,
  loadNearbyHotels
} from './reducer/hotels-data';
import { requireAuthorization } from './reducer/user-process';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';

export const fetchHotelsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchHotels',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<IHotel[]>(ApiRoute.HOTELS);
      dispatch(loadHotels(data));
      const defaultChangedCity = 'Amsterdam';
      dispatch(changeLocationCity({changedCity: defaultChangedCity}));
      dispatch(changeLocationByLocationCity({selectedLocationCity: defaultChangedCity}));
      dispatch(changeHotelsByLocationCity({selectedLocationCity: defaultChangedCity}));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchCommentsAction = createAsyncThunk<void, { hotelId: number }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchInfoSelectedHotel',
  async ({hotelId: id}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get(`${ApiRoute.COMMENTS}/${id}`);
      dispatch(loadCommentsHotel(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchNearbyHotelsAction = createAsyncThunk<void, { hotelId: number }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchNearbyHotels',
  async ({hotelId: id}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get(`${ApiRoute.HOTELS}/${id}/nearby`);
      dispatch(loadNearbyHotels(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoriteHotelsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteHotelsAction',
  async (_args, {dispatch, extra: api}) => {
    const {data} = await api.get<IHotel[]>(ApiRoute.FAVORITES);
    dispatch(loadFavoriteHotels(data));
    dispatch(redirectToRoute(ERoute.FAVORITES));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_args, {dispatch, extra: api}) => {
    try {
      await api.get(ApiRoute.LOGIN);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    } catch (error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token}} = await api.post<UserData>(ApiRoute.LOGIN, {email, password});
      saveToken(token);
      saveLoginUserName(email);
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(redirectToRoute(ERoute.MAIN));
    } catch (error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    }
  },
);

export const addCommentAction = createAsyncThunk<void, NewCommentData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/addComment',
  async ({hotelId: hotelId, comment, rating} , {dispatch, extra: api}) => {
    try {
      const {data} = await api.post(`${ApiRoute.COMMENTS}/${hotelId}`, {comment, rating});
      dispatch(loadCommentsHotel(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_args, {dispatch, extra: api}) => {
    try {
      await api.delete(ApiRoute.LOGOUT);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
      dispatch(redirectToRoute(ERoute.LOGIN));
      removeLoginUserName();
    } catch (error) {
      errorHandle(error);
    }
  },
);
