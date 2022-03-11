import MovieList from '../components/MovieList';
import {useSearchParams} from 'react-router-dom';

const Favorites = () => {
  const [searchParams] = useSearchParams();
  return (
    <div>
      <MovieList genre="favorites" moviesSearched={searchParams.get('movie_title')} />
    </div>
  );
};

export default Favorites;
