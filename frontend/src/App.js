import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Login from './pages/Login';
import Home from './pages/Home';
import Esportivos from './pages/Esportivos';
import Populares from './pages/Populares';
import Usados from './pages/Usados';
import Cadastroproduto from './pages/Cadastroproduto';
import './App.css';
import ItemSelecionado from './components/ItemSelecionado';
import Pesquisa from './components/Pesquisa';
import Vendas from './components/Vendas';
import CadastroUsuario from './components/CadastroUsuario';

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
          <Route path='/cadastroproduto' element={<Cadastroproduto/>}/>
          <Route path='/pesquisa' element={<Pesquisa/>}/>
          <Route path='/vendas' element={<Vendas/>}/>
          <Route path='/CadastroUsuario' element={<CadastroUsuario/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
