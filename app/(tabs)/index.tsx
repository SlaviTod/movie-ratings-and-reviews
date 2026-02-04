import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { MovieItem } from '@/components/Movie/MovieItem';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Movie } from '@/types/Movie';

const { movieList } = require('../../constants/k-dramas-40.json');

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/Alchemy_of_souls_g.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">K-Movie list</ThemedText>
      </ThemedView>
      {movieList.map((movie: Movie) => <MovieItem key={movie.id} movie={movie}/>)}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
