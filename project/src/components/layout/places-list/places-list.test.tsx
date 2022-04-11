import { render, screen } from '@testing-library/react';
import PlacesList from './places-list';
import { makeFakeHotelArray } from '../../../utils/mock';
import { IHotel } from '../../../types/interfaces/hotel.interface';
import { Provider } from 'react-redux';
import HistoryRouter from '../../history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';


const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: PlacesList', () => {
  const list: IHotel[] = makeFakeHotelArray(5);

  beforeEach(() => {
    history.push('/');
  });

  it('should render correctly', () => {
    const store = mockStore();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PlacesList list={list}/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByTestId('places-list')).toBeInTheDocument();
  });
});
