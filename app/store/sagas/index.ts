/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import moviesSaga from './moviesSaga';

export default function* watch() {
  yield all([takeEvery(types.FETCH_MOVIES, moviesSaga)]);
}
