import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import LoginPage from './login-page';
import HistoryRouter from '../../components/history-route/history-route';
import { AuthorizationStatus } from '../../types/enums/route.enum';

const mockStore = configureMockStore();

describe('Component: LoginPage', () => {
  it('should render "LoginPage" when user navigate to "login" url', () => {

    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LoginPage />
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });
});
