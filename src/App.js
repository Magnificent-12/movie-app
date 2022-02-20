import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import GenreComedy from './components/GenreComedy';
import GenreAction from './components/GenreAction';
import GenreDrama from './components/GenreDrama';
import GenreHorror from './components/GenreHorror';
import GenreFantasy from './components/GenreFantasy';
import GenreMystery from './components/GenreMystery';
import GenreRomance from './components/GenreRomance';
import GenreTrailer from './components/GenreTrailer';
import Favorites from './components/Favorites';
function App() {
  return (
    <Router>
      <div className="App">
      {/* 
        <Navbar/>
      */}
          <Routes>
             <Route path='/login' element={<Login/>}/>
             <Route path='/logout' element={<Logout/>}/>
             <Route path='/genre/comedy' element={<GenreComedy/>}/>
             <Route path='/genre/action' element={<GenreAction/>}/>
             <Route path='/genre/drama' element={<GenreDrama/>}/>
             <Route path='/genre/horror' element={<GenreHorror/>}/>
             <Route path='/genre/fantasy' element={<GenreFantasy/>}/>
             <Route path='/genre/mystery' element={<GenreMystery/>}/>
             <Route path='/genre/romance' element={<GenreRomance/>}/>
             <Route path='/genre/trailer' element={<GenreTrailer/>}/>
             <Route path='/favorites' element={<Favorites/>}/>

          </Routes>
      </div>
    </Router>
  );
}

export default App;
