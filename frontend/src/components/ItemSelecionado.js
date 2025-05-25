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
          <li><Link to="/pesquisa"><input type='carros' placeholder='Pesquisa' className="Pesquisa" /></Link></li>
          <li><Link to="/esportivos" className='nav-link'>Esportivos</Link></li>
          <li><Link to="/populares" className='nav-link'>Populares</Link></li>
          <li><Link to="/usados" className='nav-link'>Usados</Link></li>
          <li><Link to="/cadastroproduto" className='nav-link'>Cadastro veiculo</Link></li>
        </ul>
      </div>
      <div className='produto-wrapper'>
        <div className='produto'>
          <div className='info-left'>
            <img src={`http://localhost:5000${item.imagem}`} alt={`${item.marca} ${item.modelo}`} className='selecionado' />
            <div className='top'>
              <div className='info-down'>
                <strong className='nomeDoItem'>{item.marca}</strong>
                <strong className='modeloDoItem'> {item.modelo}</strong>
                <a>({item.status})</a>
              </div>
              <p className='valor'><strong>R$</strong> {item.valor}</p>
              <p className='color'>
                {item.cor}
                <span className='cor' style={{ backgroundColor: item.cor }}></span>
              </p>
              <lu className='detalhes-lista'>
                <h4>Detalhes</h4>
                <li>Ano {item.ano}.</li>
                <li>Peso {item.detalhesTecicos?.peso}KG.</li>
                <li>Max {item.detalhesTecicos?.velociadeMaxima}.</li>
                <li>Conbustivel {item.detalhesTecicos?.combustivel}.</li>
                <li>{item.detalhesTecicos?.motorizacao}.</li>
                <li>{item.quilometragem} KM.</li>
                <li>{item.descricao}.</li>
              </lu>
              <p></p>
              <button onClick={handleComprar} className="button-compra">Comprar</button>
            </div>
          </div>
        </div>
      </div>
      <h1 className='outros'>Mais Produtos</h1>

      <ListaDeItens />
    </div>
  ) : (
    <p>Nenhum automóvel encontrado.</p>
  );
}

export default ItemSelecionado;