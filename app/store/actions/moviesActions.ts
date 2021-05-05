/*
 * Reducer actions related with login
 */
import * as types from './types';

export function fetchMovies(keyword: string) {
  return {
    type: types.FETCH_MOVIES,
    keyword: keyword,
  };
}

export function fetchMoviesSuccess(movies: any) {
  return {
    type: types.FETCH_MOVIES_RESPONSE,
    data: movies,
  };
}

export function fetchMoviesFailed(err: any) {
  return {
    type: types.FETCH_MOVIES_ERROR,
    err,
  };
}

export function setMovieDetails(data: any) {
  return {
    type: types.SET_MOVIE_DETAILS,
    data,
  };
}
