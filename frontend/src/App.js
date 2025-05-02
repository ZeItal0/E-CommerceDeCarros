import { useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const[mensagem, setMensagem] = useState('');

  useEffect(() =>{
    axios.get('http://localhost:5000/')
    .then(res => setMensagem(res.data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{mensagem || 'Carregando...'}</p>
      </header>
    </div>
  );
}

export default App;
