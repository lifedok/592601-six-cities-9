import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { NotFound } from '../../pages/not-found/not-found';
import { AuthorizationStatus, ERoute } from '../../types/enums/route.enum';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import PrivateRoute from '../private-route/private.route';
import PropertyPage from '../../pages/property-page/property-page';
import withMap from '../../hocs/with-map';
import { useAppSelector } from '../../hooks';

export default function App(): JSX.Element {
  const {offers} = useAppSelector((state) => state);
  const PropertyPageWrapped = withMap(PropertyPage, offers);
  const MainPageWrapped = withMap(MainPage, offers);


  const isLogged = AuthorizationStatus.AUTH;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ERoute.MAIN} element={<MainPageWrapped/>}/>
        <Route path={ERoute.LOGIN} element={<LoginPage/>}/>
        <Route path={`${ERoute.ROOM}/:id`} element={<PropertyPageWrapped />}/>
        <Route path={`${ERoute.LOCATION}/:city`} element={<MainPageWrapped/>}/>

        <Route
          path={ERoute.FAVORITES}
          element={
            <PrivateRoute authorizationStatus={isLogged}>
              <FavoritesPage/>
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
