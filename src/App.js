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
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
