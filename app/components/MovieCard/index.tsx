import React from 'react';
import { Text, Image, View } from 'react-native';
import { IMoviesResponse } from '../models/api/movies';
import moment from 'moment';
import styles from './style';
interface Props {
  data: IMoviesResponse;
}
const MovieCard = (props: Props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.artworkUrl100 }} style={styles.thumb} />
      <View style={styles.content}>
        <Text style={styles.movieName}>{data.trackName}</Text>
        <Text style={styles.collectionName}>{data.collectionName}</Text>
        <Text style={styles.name}>{data.artistName}</Text>
        <Text style={styles.date}>Release Date: {moment(data.releaseDate).format('DD/MM/YYYY: hh:mm')}</Text>

      </View>
    </View>
  );
};

export default MovieCard;
