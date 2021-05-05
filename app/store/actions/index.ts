// export action creators
import * as navigationActions from './navigationActions';
import * as themeActions from './themeActions';
import * as moviesActions from './moviesActions';

export const ActionCreators = Object.assign(
  {},
  navigationActions,
  themeActions,
  moviesActions,
);
