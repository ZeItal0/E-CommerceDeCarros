import './home.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo/logo.png'



function Usados() {
  const navigate = useNavigate();
  

  return (
    <div className="Home_container">
      <div className="TopColor">
        <ul className="nav-menu">
          <li><Link to="/home"></Link><img src={logo} alt='Nossa Logo' classname='ImagemLogo'/></li>
          <li>
            <input type="carros" placeholder="Pesquisa" />
          </li>
          <li><Link to="/esportivos">Esportivos</Link></li>
          <li><Link to="/populares">Populares</Link></li>
          <li><Link to="/usados">Usados</Link></li>
          <li><a id="carrinho" href="#">Carrinho</a></li>
        </ul>
      </div>

      
      
      <div className="itens"> 
       <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        </ul> 
      </div>
    </div>
  );
}

export default Usados;

