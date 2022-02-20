import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import GenreComedy from './Pages/GenreComedy';
import GenreAction from './Pages/GenreAction';
import GenreDrama from './Pages/GenreDrama';
import GenreHorror from './Pages/GenreHorror';
import GenreFantasy from './Pages/GenreFantasy';
import GenreMystery from './Pages/GenreMystery';
import GenreRomance from './Pages/GenreRomance';
import GenreTrailer from './Pages/GenreTrailer';
import Favorites from './Pages/Favorites';
function App() {
  return (
    <Router>
      <div className="App">
        {/* TODO Navbar
        <Navbar/>
      */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/genre/comedy" element={<GenreComedy />} />
          <Route path="/genre/action" element={<GenreAction />} />
          <Route path="/genre/drama" element={<GenreDrama />} />
          <Route path="/genre/horror" element={<GenreHorror />} />
          <Route path="/genre/fantasy" element={<GenreFantasy />} />
          <Route path="/genre/mystery" element={<GenreMystery />} />
          <Route path="/genre/romance" element={<GenreRomance />} />
          <Route path="/genre/trailer" element={<GenreTrailer />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
