import './home.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo/logo.png'

function Populares(){
    const navigate = useNavigate();

    return (
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
        <div className="itens">
            <ul>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
                <li>item4</li>
                <li>item5</li>
                <li>item6</li>
                <li>item7</li>
                <li>item8</li>
                <li>item9</li>
                <li>item10</li>
                <li>item11</li>
                <li>item12</li>
                <li>item13</li>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
                <li>item4</li>
                <li>item5</li>
                <li>item6</li>
                <li>item7</li>
                <li>item8</li>
                <li>item9</li>
                <li>item10</li>
                <li>item11</li>
                <li>item12</li>
                <li>item13</li>
                <li>item13</li>
                <li>item13</li>
            </ul>
        </div>

    </div>
    );

};
export default Populares;