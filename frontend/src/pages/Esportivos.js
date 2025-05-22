import './home.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo/logo.png'
import EsportivoItens from '../components/EsportivoItens';

function Esportivos() {
    const navigate = useNavigate();

    return (
        <div className='Home_container'>
            <div className='TopColor'>
                <ul className="nav-menu">
                    <li><Link to="/home"><img src={logo} alt='Nossa logo' className='ImagemLogo' /></Link></li>
                    <li><Link to="/pesquisa"><input type='carros' placeholder='Pesquisa' /></Link></li>
                    <li><Link to="/esportivos" className='nav-link'>Esportivos</Link></li>
                    <li><Link to="/populares" className='nav-link'>Populares</Link></li>
                    <li><Link to="/usados" className='nav-link'>Usados</Link></li>
                    <li><Link to="/cadastroproduto" className='nav-link'>Cadastro veiculo</Link></li>
                    <a id='carrinho' href='#'>Carrinho</a>
                </ul>
            </div>
            <EsportivoItens />

        </div>
    );

};
export default Esportivos;