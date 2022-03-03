import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import Loader from '../components/loader/loader';
import MovieList from '../components/MovieList';

export const Home = () => {
  //get redux store information
  const movies = useSelector((state) => state.movies);
  //rerender comp whenever is changed
  useEffect(() => {}, [movies]);
  const [searchParams] = useSearchParams();
  //check if we have information.When we dont have, Loader comp will be rendered
  return movies.status === 'resolved' ? (
    <div>
      <MovieList genre="" moviesSearched={searchParams.get('movie_title')} />
    </div>
  ) : (
    <Loader></Loader>
  );
};
