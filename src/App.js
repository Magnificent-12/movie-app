import './App.css';
import {Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import {Genre} from './Pages/Genre';
import Favorites from './Pages/Favorites';
import {Home} from './Pages/Home';
import {useDispatch} from 'react-redux';
import {getMovies} from './redux/redux-reducers/movies';
import {useEffect} from 'react';

import {NavBar} from './components/NavBar';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="genre/:genre" element={<Genre />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
