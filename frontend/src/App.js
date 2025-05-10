import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
