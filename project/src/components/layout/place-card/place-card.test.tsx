import { render, screen } from '@testing-library/react';
import { makeFakeHotelArray } from '../../../utils/mock';
import { IHotel } from '../../../types/interfaces/hotel.interface';
import { Provider } from 'react-redux';
import HistoryRouter from '../../history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import PlaceCard from './place-card';


const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: PlaceCard', () => {
  const hotel: IHotel = makeFakeHotelArray(1)[0];
  const cityName = hotel.city.name;

  beforeEach(() => {
    history.push('/');
  });

  it('should render correctly', () => {
    const store = mockStore();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PlaceCard hotel={hotel}/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByTestId('place-card')).toBeInTheDocument();
    expect(screen.getByText(`${cityName}`)).toBeInTheDocument();
  });
});
