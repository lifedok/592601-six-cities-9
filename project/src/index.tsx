import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { checkAuthAction, fetchHotelsAction } from './store/api-actions';
import browserHistory from './browser-history';
import HistoryRouter from './components/history-route/history-route';

store.dispatch(fetchHotelsAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer/>
        <App/>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
