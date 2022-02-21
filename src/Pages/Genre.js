import {useState} from 'react';
import {useParams} from 'react-router-dom';
import mockData from '../mockdata.json';

export const Genre = () => {
  let param = useParams().genre;

  param = param[0].toUpperCase() + param.slice(1);
  let selectedGenre = [];
  //mockData will be real store data TODO
  mockData.movies.map((movie) => {
    if (movie.genres.includes(param)) {
      selectedGenre.push(movie);
    }
  });
  return (
    <div>
      {/*Instead of <p></p> TODO MovieCard*/}
      {selectedGenre.map((movie) => (
        <p>{movie.title}</p>
      ))}
    </div>
  );
};
