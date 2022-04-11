import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
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
      </Provider>,
    );

    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('E-mail'), 'keks@gamil.com');
    userEvent.type(screen.getByTestId('Password'), '123456');

    expect(screen.getByDisplayValue(/keks/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});
