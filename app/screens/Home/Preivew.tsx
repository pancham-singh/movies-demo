import React from 'react';
import { View, Text } from 'react-native';

import { useSelector } from 'react-redux';
import styles from './styles';
import { IMoviesState } from '../../models/reducers/movies';
import { IMoviesResponse } from '../../models/api/movies';
import MovieCard from '../../components/MovieCard';
interface IState {
  moviesReducer: IMoviesState;
}
const Preview: React.FC = () => {
  const movie: IMoviesResponse = useSelector(
    (state: IState) => state.moviesReducer.movie,
  );

  return (
    <View style={styles.container}>
      <MovieCard data={movie} />
      <View style={styles.content}>
        <View style={styles.item}>
          <Text style={styles.value}>Genre : {movie.primaryGenreName}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.value}> Price :{movie.currency}{movie.collectionPrice}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.value}>Kind : {movie.kind}</Text>
        </View>
      </View>
    </View>
  );
};

export default Preview;
