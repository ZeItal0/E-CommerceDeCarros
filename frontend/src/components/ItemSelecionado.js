import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../pages/logo/logo.png';
import ListaDeItens from "../components/ListaDeItens";
import '../pages/home.css';

function ItemSelecionado() {
  const { id } = useParams();
  const [item, setItens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItens = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/itens/${id}`);
        const data = await response.json();
        setItens(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchItens();
  }, [id]);
  const handleComprar = () => {
    navigate('/vendas', { state: { item } });
  };

  return item ? (
    <div className='Home_container'>
      <div className='TopColor'>
        <ul className="nav-menu">
          <li><Link to="/home"><img src={logo} alt='Nossa logo' className='ImagemLogo' /></Link></li>
          <li><Link to="/pesquisa"><input type='carros' placeholder='Pesquisa' className="Pesquisa"/></Link></li>
          <li><Link to="/esportivos" className='nav-link'>Esportivos</Link></li>
          <li><Link to="/populares" className='nav-link'>Populares</Link></li>
          <li><Link to="/usados" className='nav-link'>Usados</Link></li>
          <li><Link to="/cadastroproduto" className='nav-link'>Cadastro veiculo</Link></li>

          <a></a>
        </ul>
      </div>
      <div className='produto-wrapper'>
        <div className='produto'>
          <div className='info-left'>
            <img src={`http://localhost:5000${item.imagem}`} alt={`${item.marca} ${item.modelo}`} className='selecionado' />
            <div className='top'>
              <p><strong>Valor:</strong> {item.valor}</p>
              <p>
                <strong>Cor:</strong> {item.cor}
                <span className='cor' style={{ backgroundColor: item.cor }}>
                </span>
              </p>
              <button onClick={handleComprar} className="button-compra">Comprar</button>
            </div>
          </div>
          <div className='info-down'>
            <strong className='nomeDoItem'>Marca: {item.marca}</strong>
            <strong className='modeloDoItem'> {item.modelo}</strong>
            <strong className='modeloDoItem'> ({item.status})</strong>
          </div>
        </div>
      </div>
      <ListaDeItens />
    </div>
  ) : (
    <p>Nenhum automóvel encontrado.</p>
  );
}

export default ItemSelecionado;