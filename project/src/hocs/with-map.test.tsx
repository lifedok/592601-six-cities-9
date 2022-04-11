import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import withMap from './with-map';
import HistoryRouter from '../components/history-route/history-route';
import { makeFakeHotelArray } from '../utils/mock';
import MainPage from '../pages/main-page/main-page';
import { Provider } from 'react-redux';

jest.mock('../pages/main-page/main-page', () => {
  const mockMainPage = () => <>This is mock MainPage</>;

  return {
    __esModule: true,
    default: mockMainPage,
  };
});

const mockStore = configureMockStore();
describe('HOC: withMap', () => {
  it('MainPage is rendering with HOC', () => {
    const BaseComponentWrapped = withMap(() => <h1>withMap</h1>, makeFakeHotelArray());
    render(<BaseComponentWrapped/>);
    expect(screen.getByText(/withMap/i)).toBeInTheDocument();
  });

  it('base component should correct rendering another component with render-prop', () => {
    const history = createMemoryHistory();

    const BaseComponentWrapped = withMap(MainPage, makeFakeHotelArray());

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <BaseComponentWrapped>
            <p>This is children component</p>
          </BaseComponentWrapped>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/This is mock MainPage/i)).toBeInTheDocument();
  });
});
