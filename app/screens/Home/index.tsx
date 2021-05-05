import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import * as moviesActions from '../../store/actions/moviesActions';
import navigationService from '../../navigation/NavigationService';
import styles from './styles';
import { IMoviesState } from '../../models/reducers/movies';
import MovieCard from '../../components/MovieCard';
interface IState {
  moviesReducer: IMoviesState;
}
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const fetchMovies = () =>
    dispatch(moviesActions.fetchMovies('Michel Jakson'));
  const movies = useSelector((state: IState) => state.moviesReducer.movies);
  const loading = useSelector((state: IState) => state.moviesReducer.loading);

  const goToPreview = (data: any) => {
    dispatch(moviesActions.setMovieDetails(data));
    navigationService.navigate('Preview');
  };

  React.useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={movies}
        renderItem={(rowData: any) => (
          <TouchableOpacity onPress={() => goToPreview(rowData.item)}>
            <MovieCard data={rowData.item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item: any) => item.trackId}
        refreshing={loading}
        onRefresh={fetchMovies}
      />
    </View>
  );
};

export default Home;
