export enum Genre {
  romance = 'Romance',
  fantasy = 'Fantasy',
  comedy = 'Comedy',
  romanticComedy = 'Romantic Comedy',
  drama = 'Drama',
}

export interface Movie {
  id: number;
  title: string;
  synopsis: string;
  description: string;
  year: number;
  seasons: number;
  episodes: number;
  genre: Array<Genre>;
  starring: Array<string>;
  budget: number;
  budgetUsd: number;
  image: string;
}

export interface MovieItemProps {
  movie: Movie;
}