import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout/layout';
import { NotFound } from '../../pages/not-found/not-found';
import { AuthorizationStatus, ERoute } from "../../types/enums/route.enum";
import LoginPage from "../../pages/login-page/login-page";
import FavoritesPage from "../../pages/favorites-page/favorites-page";
import PrivateRoute from "../private-route/private.route";


export default function App(): JSX.Element {

  const isLogged = AuthorizationStatus.AUTH;
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout/>}/>
        <Route path={ERoute.LOGIN} element={<LoginPage/>}/>
        <Route
          path={ERoute.FAVORITES}
          element={
            <PrivateRoute authorizationStatus={isLogged}>
              <FavoritesPage/>
            </PrivateRoute>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
