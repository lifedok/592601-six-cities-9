import React from "react";
import Header from "./header/header";
import Main from "./main/main";

const PlacesCard = {
  COUNT: 5,
};

export default function Layout(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <Main placesCard={PlacesCard.COUNT}/>
    </div>
  );
}
