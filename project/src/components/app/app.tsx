import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { NotFound } from '../../pages/not-found/not-found';
import { ERoute } from '../../types/enums/route.enum';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import PrivateRoute from '../private-route/private.route';
import PropertyPage from '../../pages/property-page/property-page';
import { useAuthStatus, isCheckedAuth, useIsDataLoaded } from '../../store/selector';
import LoadingScreen from '../loading-screen/loading-screen';

export default function App(): JSX.Element {
  const authorizationStatus = useAuthStatus();
  const isData = useIsDataLoaded();


  if (isCheckedAuth(authorizationStatus) || !isData) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <Routes>
      <Route path={ERoute.MAIN} element={<MainPage/>}/>
      <Route path={ERoute.LOGIN} element={<LoginPage/>}/>
      <Route path={`${ERoute.ROOM}/:id`} element={<PropertyPage/>}/>
      <Route path={`${ERoute.LOCATION}/:city`} element={<MainPage/>}/>

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
  );
}
