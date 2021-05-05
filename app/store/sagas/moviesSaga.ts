import { put, call } from 'redux-saga/effects';

import { fetchMovies } from '../../services/movies';
import * as moviesActions from '../actions/moviesActions';

// Our worker Saga that logins the user
export default function* moviesAsync(action: any) {
  //how to call api
  const response = yield call(fetchMovies, action.keyword);
  if (response.data) {
    const { results } = response.data;
    yield put(moviesActions.fetchMoviesSuccess(results));

  } else {
    yield put(moviesActions.fetchMoviesFailed('Something went wrong!'));
  }
}
