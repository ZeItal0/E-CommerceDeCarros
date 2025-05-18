import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../pages/logo/logo.png';
import ListaDeItens from "../components/ListaDeItens";

function ItemSelecionado() {
  const { id } = useParams();
  const [item, setItens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  }, []);

  if (loading) {
    return <p>Carregando itens...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os itens: {error.message}</p>;
  }

  return item ? (
    <div className='Home_container'>
                <div className='TopColor'>
                    <ul className="nav-menu">
                        <li><Link to="/home"><img src={logo} alt='Nossa logo' className='ImagemLogo'/></Link></li>
                        <li><input type='carros' placeholder='Pesquisa'/></li>
                        <li><Link to="/esportivos">Esportivos</Link></li>
                        <li><Link to="/populares">Populares</Link></li>
                        <li><Link to="/usados">Usados</Link></li>
                        <a id='carrinho' href='#'>Carrinho</a>
                        <a></a>
                    </ul>
                </div>
                <strong>Marca:</strong> {item.marca},
                <strong>Modelo:</strong> {item.modelo},
                <strong>Cor:</strong> {item.cor},
                <strong>Valor:</strong> {item.valor},
                 {/* <ListaDeItens />       */}
        </div>
      ) : (
        <p>Nenhum automóvel encontrado.</p>
  );
}

export default ItemSelecionado;