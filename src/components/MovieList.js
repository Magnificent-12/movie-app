import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import mockdata from '../mockdata.json';
import {MovieCard} from './MovieCard';
import {Sort} from './Sort';
import {Filter} from './Filter';



const MovieList = (props) => {
  const loggedIn = useSelector((state) => state.userStore.loggedIn);
  const user = useSelector((state) => state.userStore.email);
  const [movies, setMovies] = useState([]);
  const [sortString, setSortString] = useState('');

  //used for setting favorite movies, if localstorage is empty returns and empty array
  const [favorites, setFavorites] = useState(() => {
    //getting favorites by user email
    const data = localStorage.getItem(JSON.stringify(user));
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  });
  const searchedGenre = props.genre === '' ? undefined : props.genre[0].toUpperCase() + props.genre.slice(1);
  const searchedMovies = props.moviesSearched;


  const getGenres = (genres) => genres.join(', ');
  const handleSort = (value) => {
    setSortString(value);
  };
  //handles favorite click
  const handleAddToFavorites = (movie) => {
    //only allow adding to favorites if the user is logged in
    if (loggedIn) {
      if (favorites.includes(movie)) {
        setFavorites(favorites.filter((prevMovie) => prevMovie !== movie));
      } else {
        setFavorites([movie, ...favorites]);
      }
    } else {
      toast.info('You have to be logged in to add to favorites!', {
        theme: 'colored',
      });
    }
  };
  const sortArray = (sortString, arrayToSort) => {
    if (sortString === 'nameasc') {
      arrayToSort.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else if (sortString === 'namedesc') {
      arrayToSort.sort((a, b) => (a.title < b.title ? 1 : -1));
    } else if (sortString === 'yearasc') {
      arrayToSort.sort((a, b) => (a.year > b.year ? 1 : -1));
    } else if (sortString === 'yeardesc') {
      arrayToSort.sort((a, b) => (a.year < b.year ? 1 : -1));
    }
  };
  //function that handles the logic of cheking if the movie is favorite
  const isFavorite = (movie) => favorites.includes(movie);

  useEffect(() => {
    if (sortString !== '') sortArray(sortString, mockdata.movies);

    if (typeof searchedGenre === 'undefined') {
      if (searchedMovies === null) {
        setMovies(mockdata.movies.map((movie) => movie));
      } else {
        setMovies(mockdata.movies.filter((movie) => movie.title.toLowerCase().includes(searchedMovies.toLowerCase())));
      }
    } else if (searchedGenre === 'Favorites') {
      if (searchedMovies === null) {
        setMovies(mockdata.movies.filter((movie) => favorites.includes(movie.title)));
      } else {
        setMovies(
          mockdata.movies.filter(
            (movie) => favorites.includes(movie.title) && movie.title.toLowerCase().includes(searchedMovies.toLowerCase())
          )
        );
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
  }, [searchedGenre, searchedMovies, sortString, favorites]);

  //sets the localstorage to the current favorites list when the list changes
  useEffect(() => {
    //Setting user email as the key for favorites
    if (loggedIn) localStorage.setItem(JSON.stringify(user), JSON.stringify(favorites));
  }, [favorites, user, loggedIn]);
  
 /* insert useEffect below */
  const handleFilter = (value, startYear, endYear) => {
    if (startYear > endYear){
      alert('Invalid value')
    } else {
    if (value.length > 0){ 
    setMovies(mockdata.movies.filter((movie) => movie.genres.includes(...value) && parseInt(movie.year) >= startYear && 
    parseInt(movie.year) <= endYear))
      } else {
        setMovies(mockdata.movies.filter((movie) => parseInt(movie.year) >= startYear && 
        parseInt(movie.year) <= endYear))  
      }
    } 
  }
  
  

  return (
    <div>
      <div>
        <Sort handleSort={handleSort} />
        <Filter handleFilter={handleFilter}/>
        
      </div>
      <div className="movie-list">
        {movies?.map((movie, index) => (
          //handles the slow loading of a list
          <div style={{animationDelay: index < 25 ? index * 0.03 + 's' : 0.02}} className="slow-load">
            <MovieCard
              movieTitle={movie.title}
              movieYear={movie.year}
              movieGenre={getGenres(movie.genres)}
              moviePoster={movie.posterUrl}
              movieActors={movie.actors}
              movieDescription={movie.plot}
              movieFavorite={isFavorite(movie.title)}
              handleFavorites={handleAddToFavorites}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
