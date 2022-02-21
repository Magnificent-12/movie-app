import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import mockData from '../mockdata.json';

export const Genre = () => {
  const {genre} = useParams();

  //First letter has to be capital to match
  const modifiedGenreString = genre[0].toUpperCase() + genre.slice(1);

  const [movies, setMovies] = useState();

  useEffect(() => {
    //TODO real store Data instead of mockData
    setMovies(mockData.movies.filter((movie) => movie.genres.includes(modifiedGenreString)));
  }, [modifiedGenreString]);

  return (
    <div>
      {/*TODO MovieCard instead of <p>*/}
      {movies?.map((movie) => {
        return <p>{movie?.title}</p>;
      })}
    </div>
  );
};
