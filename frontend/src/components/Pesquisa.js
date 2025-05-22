import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../pages/home.css';
import logo from '../pages/logo/logo.png';

function Pesquisa() {
  const [busca, setBusca] = useState('');
  const [itens, setItens] = useState([]);
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const fetchItens = async () => {
      const res = await fetch('http://localhost:5000/api/itens');
      const data = await res.json();
      setItens(data);
    };

    fetchItens();
  }, []);

  useEffect(() => {
    const filtrados = itens.filter((item) =>
      item.marca.toLowerCase().includes(busca.toLowerCase()) ||
      item.modelo.toLowerCase().includes(busca.toLowerCase())
    );
    setResultados(filtrados);
  }, [busca, itens]);

  return (
    <div className='Home_container'>
      <div className='TopColor'>
        <ul className="nav-menu">
          <li><Link to="/home"><img src={logo} alt='Nossa logo' className='ImagemLogo' /></Link></li>
          <li><input type='text' placeholder='Pesquisa' value={busca} onChange={(e) => setBusca(e.target.value)}/></li>
          <li><Link to="/esportivos">Esportivos</Link></li>
          <li><Link to="/populares">Populares</Link></li>
          <li><Link to="/usados">Usados</Link></li>
          <li><Link to="/cadastroproduto">Cadastro veiculo</Link></li>
          <a id='carrinho' href='#'>Carrinho</a>
        </ul>
      </div>

      <div className='itens'>
       {resultados.length > 0 ? ( 
               <ul>
                 {resultados.map((item) => (
                   <li key={item._id}>
                     <Link to={`/itens/${item._id}`} className='link-item'>
                       <img src={`http://localhost:5000${item.imagem}`} alt={`${item.marca} ${item.modelo}`} className='carroimg' />
                       <a><strong>Marca:</strong> {item.marca} {item.modelo}</a>
                       <a><strong id='valorcolor'>Valor:</strong> {item.valor}</a>
                     </Link>
                   </li>
                 ))}
               </ul>
             ) : (
               <p>Automovel não encontrado</p>
             )}
      </div>
    </div>
  );
}

export default Pesquisa;
