import {useState, useEffect} from 'react';
import mockdata from '../mockdata.json';
import {MovieCard} from './MovieCard';

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const searchedGenre = props.genre === '' ? undefined : props.genre[0].toUpperCase() + props.genre.slice(1);
  const searchedMovies = props.moviesSearched;
  const getGenres = (genres) => genres.join(', ');

  useEffect(() => {
    if (typeof searchedGenre === 'undefined') {
      if (searchedMovies === null) {
        setMovies(mockdata.movies.map((movie) => movie));
      } else {
        setMovies(mockdata.movies.filter((movie) => movie.title.toLowerCase().includes(searchedMovies.toLowerCase())));
      }
    } else {
      if (searchedMovies === null) {
        setMovies(mockdata.movies.filter((movie) => movie.genres.includes(searchedGenre)));
      } else {
        setMovies(
          mockdata.movies.filter(
            (movie) => movie.genres.includes(searchedGenre) && movie.title.toLowerCase().includes(searchedMovies.toLowerCase())
          )
        );
      }
    }
  }, [searchedGenre, searchedMovies]);

  return (
    <div>
      {movies?.map((movie) => (
        <MovieCard
          movieTitle={movie.title}
          movieGenre={getGenres(movie.genres)}
          moviePoster={movie.posterUrl}
          movieActors={movie.actors}
          movieDescription={movie.plot}
          /*TODO add to favorites*/
          movieFavorite={false}
        />
      ))}
    </div>
  );
};

export default MovieList;
