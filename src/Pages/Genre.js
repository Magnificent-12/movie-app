import {useParams, useSearchParams} from 'react-router-dom';
import MovieList from '../components/MovieList';

export const Genre = () => {
  const {genre} = useParams();
  const [searchParams] = useSearchParams();

  return (
    <div>
      <MovieList genre={genre} moviesSearched={searchParams.get('movie_title')} />
    </div>
  );
};
