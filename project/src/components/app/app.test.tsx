import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import App from './app';
import { AuthorizationStatus, ERoute } from '../../types/enums/route.enum';
import { HotelsData } from '../../types/state';

const mockStore = configureMockStore();
const initialEmptyState: HotelsData = {
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
  DATA: initialEmptyState,
});

const history = createMemoryHistory();

const fakeEmptyApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App/>
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {

  it('should render "LoginPage" when user navigate to "/login"', () => {
    history.push(ERoute.LOGIN);
    render(fakeEmptyApp);
    expect(screen.getByText('Amsterdam')).toBeInTheDocument();
    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeEmptyApp);
    expect(screen.getByText('Страница не найдена')).toBeInTheDocument();
    expect(screen.getByText('На главную')).toBeInTheDocument();
  });
});
