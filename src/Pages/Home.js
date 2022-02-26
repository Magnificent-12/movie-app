import {useSearchParams} from 'react-router-dom';
import MovieList from '../components/MovieList';

export const Home = () => {
  const [searchParams] = useSearchParams();
  return (
    <div>
      <MovieList genre="" moviesSearched={searchParams.get('movie_title')} />
    </div>
  );
};
