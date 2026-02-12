import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Movie } from '@/types/Movie';
import { useLocalSearchParams } from 'expo-router';

const { movieList } = require('../constants/k-dramas-40.json');

export default function ModalScreen() {

  const { movieId } = useLocalSearchParams();

  const movie = movieList.filter((m: Movie) => m.id === Number(movieId))[0];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={movie.image}
          style={styles.movieImage}
        />
      }>
      <ThemedView style={styles.mainContainer}>
        <ThemedText type="title" style={styles.title}>{movie.title}</ThemedText>
        <ThemedText type="subtitle">{movie.year}</ThemedText>
        <ThemedText type="defaultSemiBold">{movie.genre.join(', ')}</ThemedText>
        <ThemedText type="defaultSemiBold">Starring: {movie.starring.join(', ')}</ThemedText>
        <ThemedView style={styles.seasonContainer}>
          <ThemedText type="default">Seasons: {movie.seasons}</ThemedText>
          <ThemedText type="default">Episodes: {movie.episodes}</ThemedText>
        </ThemedView>
          <ThemedText type="default">Budget of the series:</ThemedText>
          <ThemedText type="default">{new Intl.NumberFormat('en-US', { style: "currency", currency: "KRW" }).format(movie.budget)}</ThemedText>
          <ThemedText type="default">{new Intl.NumberFormat('en-US', { style: "currency", currency: "USD" }).format(movie.budgetUsd)}</ThemedText>
          <ThemedText type="default">Synopsis: {movie.synopsis}</ThemedText>
          <ThemedText type="default">{movie.description}</ThemedText>

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
  },
  movieImage: {
    height: 500,
    width: '100%',
  },
  title: {
    alignSelf: 'center',
  },
  seasonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 100,
  }
});
