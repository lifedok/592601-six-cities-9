import { render, screen } from '@testing-library/react';
import MapView from "./map-view";
import { IHotel, IPlace } from "../../types/interfaces/hotel.interface";

const hotels: IHotel[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: "Amsterdam"
    },
    description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    goods: [
      "Heating"
    ],
    host: {
      avatarUrl: "img/1.png",
      id: 3,
      isPro: true,
      name: "Angelina"
    },
    id: 1,
    images: [
      "img/1.png"
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: "img/1.png",
    price: 120,
    rating: 4.8,
    title: "Beautiful & luxurious studio at great location",
    type: "apartment"
  }
];

const location: IPlace = {
  name: "Amsterdam",
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10
  },
};

describe('Component: MapView', () => {
  beforeAll(() => {
    window.HTMLMapElement.prototype.addEventListener = jest.fn();
    window.HTMLMapElement.prototype.removeEventListener = jest.fn();
  });

  it('should render correctly', () => {

    render(
      <MapView
        hotels={hotels}
        city={location}
        hoveredOffer={hotels[0]}
      />,
    );

    expect(screen.getByTestId('map-view')).toBeInTheDocument();
  });
});
