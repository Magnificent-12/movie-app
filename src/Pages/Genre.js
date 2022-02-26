import {useEffect, useState} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import {MovieCard} from '../components/MovieCard';
import mockData from '../mockdata.json';

export const Genre = () => {
  const {genre} = useParams();
  const [searchParams] = useSearchParams();
  //First letter has to be capital to match
  const modifiedGenreString = genre[0].toUpperCase() + genre.slice(1);

  const [movies, setMovies] = useState();

  useEffect(() => {
    //TODO real store Data instead of mockData
    if (searchParams.get('movie_title') === null) {
      setMovies(mockData.movies.filter((movie) => movie.genres.includes(modifiedGenreString)));
    } else {
      setMovies(
        mockData.movies.filter(
          (movie) =>
            movie.genres.includes(modifiedGenreString) && movie.title.toLowerCase().includes(searchParams.get('movie_title').toLowerCase())
        )
      );
    }
  }, [modifiedGenreString, searchParams]);

  return (
    <div>
      {movies?.map((movie) => (
        <MovieCard
          movieTitle={movie.title}
          movieGenre={movie.genres.map((genre, index) => {
            let next = movie.genres[index + 1];
            if (typeof next !== 'undefined') {
              return genre + ', ';
            } else {
              return genre;
            }
          })}
          moviePoster={movie.posterUrl}
          movieActors={movie.actors}
          movieDescription={movie.plot}
          movieFavorite={false}
        />
      ))}
    </div>
  );
};
