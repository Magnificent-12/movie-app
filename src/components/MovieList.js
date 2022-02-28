import {useState, useEffect} from 'react';
import mockdata from '../mockdata.json';
import {MovieCard} from './MovieCard';

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);

  //used for setting favorite movies, if localstorage is empty returns and empty array
  const [favorites, setFavorites] = useState(() => {
    //TODO userEmail instead of movies
    const data = localStorage.getItem('movies');
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  });
  const searchedGenre = props.genre === '' ? undefined : props.genre[0].toUpperCase() + props.genre.slice(1);
  const searchedMovies = props.moviesSearched;
  const getGenres = (genres) => genres.join(', ');

  //handles favorite click
  const handleAddToFavorites = (movie) => {
    if (favorites.includes(movie)) {
      setFavorites(favorites.filter((prevMovie) => prevMovie !== movie));
    } else {
      setFavorites([movie, ...favorites]);
    }
  };

  //function that handles the logic of cheking if the movie is favorite
  const isFavorite = (movie) => favorites.includes(movie);

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

  //sets the localstorage to the current favorites list when the list changes
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(favorites));
  }, [favorites]);
  return (
    <div>
      {movies?.map((movie) => (
        <MovieCard
          movieTitle={movie.title}
          movieGenre={getGenres(movie.genres)}
          moviePoster={movie.posterUrl}
          movieActors={movie.actors}
          movieDescription={movie.plot}
          movieFavorite={isFavorite(movie.title)}
          handleFavorites={handleAddToFavorites}
        />
      ))}
    </div>
  );
};

export default MovieList;
