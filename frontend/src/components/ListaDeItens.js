import React, { useState, useEffect } from 'react';

function ListaDeItens() {
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItens = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/itens'); // Certifique-se de usar a URL correta do seu backend
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setItens(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchItens();
  }, []); // O array vazio como segundo argumento garante que o efeito roda apenas uma vez após a montagem do componente

  if (loading) {
    return <p>Carregando itens...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os itens: {error.message}</p>;
  }

  return (
    <div>
      <h2>Lista de Automóveis</h2>
      {itens.length > 0 ? (
        <ul>
          {itens.map((item) => (
            <li key={item._id}> {/* Supondo que seus documentos tenham um campo _id */}
              <strong>Marca:</strong> {item.marca},
              <strong>Modelo:</strong> {item.modelo},
              <strong>Cor:</strong> {item.cor},
              <strong>Valor:</strong> {item.valor},
              {/* Adicione outros campos que você queira exibir */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum automóvel encontrado.</p>
      )}
    </div>
  );
}

export default ListaDeItens;