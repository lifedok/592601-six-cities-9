import { Middleware } from 'redux';
import browserHistory from '../browser-history';
import { rootReducer } from '../store/reducer/root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> = (_store) => (next) => (action) => {
  if (action.type === 'route/redirectToRoute') {
    browserHistory.push(action.payload);
  }

  return next(action);
};
