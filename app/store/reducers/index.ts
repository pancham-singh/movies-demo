/*
 * combines all th existing reducers
 */
import * as themeReducer from './themeReducer';
import * as moviesReducer from './moviesReducer';

export default Object.assign(themeReducer, moviesReducer);
