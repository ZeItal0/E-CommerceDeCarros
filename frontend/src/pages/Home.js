import './home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/');
  };

  return (
    <div className="Home_container">
      <div className="TopColor">
        <ul className="nav-menu">
          <li>icone</li>
          <li>
            <input type="carros" placeholder="Pesquisa" />
          </li>
          <li><a href="#">Esportivos</a></li>
          <li><a href="#">Populares</a></li>
          <li><a href="#">Usados</a></li>
          <li><a id="carrinho" href="#">Carrinho</a></li>
        </ul>
      </div>

      <div className="MedioColor">
        {/* Conteúdo do meio */}
      </div>
    </div>
  );
}

export default Home;

