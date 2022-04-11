import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import HistoryRouter from '../../history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import Header from './header';
import { AuthorizationStatus } from '../../../types/enums/route.enum';


const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: Header', () => {

  beforeEach(() => {
    history.push('/login');
  });

  it('should render correctly', () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header/>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
