import './home.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo/logo.png'

function Esportivos(){
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
                <li><Link to="/cadastroproduto">Cadastro veiculo</Link></li>
                <a id='carrinho' href='#'>Carrinho</a>
                <a></a>
            </ul>
        </div>
        <div className="container-inputs">
            <input type='marca' placeholder='marca'/>
            <input type='modelo' placeholder='modelo'/>
            <input type='cor' placeholder='cor'/>
            <input type='valor' placeholder='valor'/>
            <input type='descricao' placeholder='descricao'/>
            <input type='status' placeholder='status'/>
            <input type='ano' placeholder='ano'/>
            <input type='km' placeholder='km'/>
            <input type='tipo' placeholder='tipo'/>
            <button>Salvar</button>
        </div>

    </div>
    );

};
export default Esportivos;