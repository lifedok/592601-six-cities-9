import React from 'react';
import Header from '../../components/layout/header/header';
import MainView from '../../components/layout/main/main-view';

const PlacesCard = {
  COUNT: 5,
};

export default function MainPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <MainView placesCard={PlacesCard.COUNT}/>
    </div>
  );
}
