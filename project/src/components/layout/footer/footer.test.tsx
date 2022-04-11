import { render, screen } from '@testing-library/react';
import Footer from './footer';
import { Provider } from 'react-redux';
import HistoryRouter from '../../history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

describe('Component: Footer', () => {
  beforeEach(() => {
    history.push('/not-found');
  });

  it('should render correctly', () => {
    const store = configureMockStore()();
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Footer/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});


