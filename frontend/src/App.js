import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Login from './pages/Login';
import Home from './pages/Home';
import Esportivos from './pages/Esportivos';
import Populares from './pages/Populares';
import Usados from './pages/Usados';
import './App.css';
import ItemSelecionado from './components/ItemSelecionado';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/esportivos" element={<Esportivos />}/>
          <Route path="/populares" element={<Populares />}/>
          <Route path="/usados" element={<Usados />}/>
          <Route path='/itens/:id' element={<ItemSelecionado/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
