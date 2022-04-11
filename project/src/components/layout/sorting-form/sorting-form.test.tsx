import { render, screen } from '@testing-library/react';
import SortingForm from "./sorting-form";
import { Provider } from "react-redux";
import HistoryRouter from "../../history-route/history-route";
import { createMemoryHistory } from "history";
import { configureMockStore } from "@jedmao/redux-mock-store";

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: SortingForm', () => {
  beforeEach(() => {
    history.push('/');
  });

  it('should render correctly', () => {
    const store = mockStore();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <SortingForm/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText('Sort by')).toBeInTheDocument();
  });
});
