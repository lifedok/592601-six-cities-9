import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import App from './app';
import { AuthorizationStatus, ERoute } from "../../types/enums/route.enum";
import { HotelsData } from "../../types/state";
import { address } from "faker";
import { makeFakeHotelArray } from "../../utils/mock";

//
// const mockStore = configureMockStore();
// const initialState = (): HotelsData => ({
//   city: {
//     name: address.cityName(),
//     location: {
//       latitude: Number(address.latitude()),
//       longitude: Number(address.longitude()),
//       zoom: 10,
//     },
//   },
//   hotels: makeFakeHotelArray(),
//   selectedTabHotels: [],
//   selectedOfferHotel: null,
//   favoriteHotels: [],
//   nearbyHotels: [],
//   comments: [],
//   isDataLoaded: true,
// });


const mockStore = configureMockStore();
const initialState: HotelsData = {
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
  },
  hotels: [],
  selectedTabHotels: [],
  selectedOfferHotel: null,
  favoriteHotels: [],
  nearbyHotels: [],
  comments: [],
  isDataLoaded: true,
};

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.AUTH},
  DATA: initialState,
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App/>
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {

  it('should render "LoginPage" when user navigate to "/login"', () => {
    history.push(ERoute.LOGIN);
    render(fakeApp);
    expect(screen.getByText('Amsterdam')).toBeInTheDocument();
    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  // it('should render "MainPage" when user navigate to "/"', () => {
  //   history.push(ERoute.MAIN);
  //   render(fakeApp);
  //   expect(screen.getByText('places to stay in')).toBeInTheDocument();
  //   expect(screen.getByText('Sort by')).toBeInTheDocument();
  //   expect(screen.getByText('Popular')).toBeInTheDocument();
  // });
  //
  // it('should render "PropertyPage" when user navigate to "/"', () => {
  //   history.push(`${ERoute.ROOM}/${32}`);
  //   render(fakeApp);
  //   expect(screen.getByText('What\'s inside')).toBeInTheDocument();
  //   expect(screen.getByText('Meet the host')).toBeInTheDocument();
  //   expect(screen.getByText('Reviews')).toBeInTheDocument();
  // });

  // it('should render "WinScreen" when user navigate to "/result"', () => {
  //   history.push(ERoute.FAVORITES);
  //
  //   render(fakeApp);
  //
  //   expect(screen.getByText(/Вы настоящий меломан!/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Вы ответили правильно на 8 вопросов/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Сыграть ещё раз/i)).toBeInTheDocument();
  // });

  // it('should render "GameOverScreen" when user navigate to "/lose"', () => {
  //   history.push(AppRoute.Lose);
  //
  //   render(fakeApp);
  //
  //   expect(screen.getByText(/Какая жалость!/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Попробовать ещё раз/i)).toBeInTheDocument();
  //   expect(screen.getByText(/У вас закончились все попытки. Ничего, повезёт в следующий раз!/i)).toBeInTheDocument();
  // });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('Страница не найдена')).toBeInTheDocument();
    expect(screen.getByText('На главную')).toBeInTheDocument();
  });
});
