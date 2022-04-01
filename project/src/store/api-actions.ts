import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { loadOffers, requireAuthorization } from './action';
import { ApiRoute, AuthorizationStatus } from '../types/enums/route.enum';
import { IOfferByCity } from '../mocks/offers-by-location-city-mock.data';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from "../types/auth-data";
import { UserData } from "../types/user-data";
import { errorHandle } from "../services/error-handle";

export const fetchOffersAction = createAsyncThunk(
  'data/fetchQuestions',
  async () => {
    const {data} = await api.get<IOfferByCity[]>(ApiRoute.HOTELS);
    store.dispatch(loadOffers(data));
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
      store.dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
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
    } catch (error) {
      errorHandle(error);
    }
  },
);
