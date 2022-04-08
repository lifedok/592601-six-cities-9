import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { NotFound } from '../../pages/not-found/not-found';
import { ERoute } from '../../types/enums/route.enum';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import PrivateRoute from '../private-route/private.route';
import PropertyPage from '../../pages/property-page/property-page';
import withMap from '../../hocs/with-map';
import { useAuthStatus, isCheckedAuth, useIsDataLoaded, useGetHotels } from '../../store/selector';
import LoadingScreen from '../loading-screen/loading-screen';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';

export default function App(): JSX.Element {
  const PropertyPageWrapped = withMap(PropertyPage, useGetHotels());
  const MainPageWrapped = withMap(MainPage, useGetHotels());
  const authorizationStatus = useAuthStatus();
  const isData = useIsDataLoaded();


  if (isCheckedAuth(authorizationStatus) || !isData) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={ERoute.MAIN} element={<MainPageWrapped/>}/>
        <Route path={ERoute.LOGIN} element={<LoginPage/>}/>
        <Route path={`${ERoute.ROOM}/:id`} element={<PropertyPageWrapped/>}/>
        <Route path={`${ERoute.LOCATION}/:city`} element={<MainPageWrapped/>}/>

        <Route
          path={ERoute.FAVORITES}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesPage/>
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </HistoryRouter>
  );
}
