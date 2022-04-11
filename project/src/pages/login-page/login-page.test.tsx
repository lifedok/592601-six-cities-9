import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import LoginPage from './login-page';
import HistoryRouter from '../../components/history-route/history-route';

const mockStore = configureMockStore();

describe('Component: AuthScreen', () => {
  it('should render "LoginPage" when user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={mockStore({})}>
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
