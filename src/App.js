import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import {Genre} from './Pages/Genre';
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
          <Route path="/genre/:genre" element={<Genre />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
