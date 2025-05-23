import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../pages/home.css';
import logo from '../pages/logo/logo.png';

function Pesquisa() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const categoriaInicial = queryParams.get('categoria');
  const statusInicial = queryParams.get('status');

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
    const filtrados = itens.filter((item) => {
      const condicaoBusca =
        item.marca.toLowerCase().includes(busca.toLowerCase()) ||
        item.modelo.toLowerCase().includes(busca.toLowerCase());

      const condicaoCategoria = categoriaInicial
        ? item.categoria === categoriaInicial
        : true;

      const condicaoStatus = statusInicial
        ? item.status === statusInicial
        : true;

      return condicaoBusca && condicaoCategoria && condicaoStatus;
    });

    setResultados(filtrados);
  }, [busca, itens, categoriaInicial, statusInicial]);

  return (
    <div className='Home_container'>
      <div className='TopColor'>
        <ul className="nav-menu">
          <li><Link to="/home"><img src={logo} alt='Nossa logo' className='ImagemLogo' /></Link></li>
          <li><input type='text' placeholder='Pesquisa' value={busca} onChange={(e) => setBusca(e.target.value)} /></li>
          <li><Link to="/esportivos" className='nav-link'>Esportivos</Link></li>
          <li><Link to="/populares" className='nav-link'>Populares</Link></li>
          <li><Link to="/usados" className='nav-link'>Usados</Link></li>
          <li><Link to="/cadastroproduto" className='nav-link'>Cadastro veiculo</Link></li>
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
                  <a id='valorcolor'>{item.marca} {item.modelo} R$ {item.valor}</a>
                  <a><strong></strong>{item.ano} • {item.quilometragem} km • {item.categoria}</a>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Automóvel não encontrado</p>
        )}
      </div>
    </div>
  );
}

export default Pesquisa;
