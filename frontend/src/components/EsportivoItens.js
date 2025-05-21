import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import car from '../pages/cars/carros-esportivos.png'

function EsportivoItens() {
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItens = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/itens');
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

  return (
    <div className="itens">
      {itens.length > 0 ? ( 
        <ul>
          {itens.filter((item) => item.categoria === 'Esportivo' && item.status === 'novo').map((item) => ( //Esperando incrementação do "esportivo" ao banco de dados
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
  );
}

export default EsportivoItens;