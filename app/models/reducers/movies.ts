import { IMoviesResponse } from '../api/movies';

export interface IMoviesState {
  movies: IMoviesResponse[];
  loading: boolean;
  keyword: string;
  error: string;
  movie: IMoviesResponse | any;
}
