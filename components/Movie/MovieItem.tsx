import { MovieItemProps } from "@/types/Movie";
import { Image } from 'expo-image';
import { StyleSheet } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";



export const MovieItem = ({
  movie,
}: MovieItemProps) => {

  return (
    <ThemedView style={styles.mainContainer}>
      <ThemedView style={styles.imageContainer}>
        <Image
          source={movie.image}
          style={styles.image}
        />
      </ThemedView>

      <ThemedView style={styles.textContainer}>
        <ThemedText type="subtitle" style={{marginBottom: 5}}>{movie.title}</ThemedText>
        <ThemedText type="subtitle">{movie.year}</ThemedText>
        <ThemedText type="default">{movie.genre.join(', ')}</ThemedText>
        <ThemedText type="default">{movie.starring.join(', ')}</ThemedText>
      </ThemedView>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 160,
    width: '98%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'deepskyblue',
    boxShadow: '10px 5px 5px gray',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  imageContainer: {
    width: '30%',
    height: 150,
  },
  textContainer: {
    width: '67%',
    flexDirection: 'column',
  },
  image: {
    height: 153,
    width: 95,
    objectFit: 'cover',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'darkturquoise',
  },
});
