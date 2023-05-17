import './App.css';
import Auth from './scenes/Auth/Auth';
import Home from './scenes/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Router>
        <div>
      
          <Routes>
            <Route  path="/" element={<Auth />} />
            <Route  path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App; 
