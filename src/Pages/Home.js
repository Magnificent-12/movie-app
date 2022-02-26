import mockData from '../mockdata.json';
import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {MovieCard} from '../components/MovieCard';

export const Home = () => {
  const [movies, setMovies] = useState();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    //Gets all data if there are no search terms
    if (searchParams.get('movie_title') === null) {
      setMovies(mockData?.movies.map((movie) => movie));
    } else {
      setMovies(
        mockData.movies.filter(
          //Includes all movie titles that have the searched parameter
          (movie) => movie.title.toLowerCase().includes(searchParams.get('movie_title').toLowerCase())
        )
      );
    }
  }, [searchParams]);
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
