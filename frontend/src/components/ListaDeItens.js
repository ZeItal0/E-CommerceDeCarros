import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import car from '../pages/cars/carros-esportivos.png'

function ListaDeItens() {
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
          {itens.map((item) => (
            <li key={item._id}>
              <Link to={`/itens/${item._id}`}>
              <img src={car} alt='cartest' className='carroimg'/>
              <strong>Marca:</strong> {item.marca},
              <strong>Valor:</strong> {item.valor},
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

export default ListaDeItens;