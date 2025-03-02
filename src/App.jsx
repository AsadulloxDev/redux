import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";

function App() {
  return (
    <Router>
      <nav className="flex space-x-4 p-4 bg-gray-200">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? "text-blue-600 font-bold" : "text-gray-800"
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/favorites" 
          className={({ isActive }) => 
            isActive ? "text-blue-600 font-bold" : "text-gray-800"
          }
        >
          Favorites
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
    
  );
}

export default App;
