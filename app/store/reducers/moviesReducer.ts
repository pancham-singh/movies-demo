/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../../lib/createReducer';
import * as types from '../../store/actions/types';

import { IMoviesState } from '../../models/reducers/movies';
import { IMoviesRequestState } from '../../models/actions/movies';
const initialState: IMoviesState = {
  keyword: '',
  movies: [],
  loading: false,
  error: '',
  movie: {},
};

export const moviesReducer = createReducer(initialState, {
  [types.FETCH_MOVIES](state: IMoviesState, action: IMoviesRequestState) {
    return {
      ...state,
      keyword: action.keyword,
      loading: true,
    };
  },
  [types.FETCH_MOVIES_RESPONSE](
    state: IMoviesState,
    action: IMoviesRequestState,
  ) {
    return { ...state, loading: false, movies: action.data };
  },
  [types.FETCH_MOVIES_ERROR](state: IMoviesState, action: IMoviesRequestState) {
    return {
      ...state,
      loading: false,
      err: action.err,
    };
  },
  [types.SET_MOVIE_DETAILS](state: IMoviesState, action: IMoviesRequestState) {
    return {
      ...state,
      movie: action.data,
    };
  },
});
