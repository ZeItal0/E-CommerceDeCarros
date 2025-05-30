import './home.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo/logo.png';
import EsportivoItens from '../components/EsportivoItens';
import userimg from './logo/user.png';

function Esportivos() {
    const navigate = useNavigate();
    const tipoUsuario = localStorage.getItem('tipoUsuario');
    const nomeUsuario = localStorage.getItem('nome');
    const irParaPesquisa = () => {
        navigate('/pesquisa?categoria=Esportivo&status=novo');
    };

    return (
        <div className='Home_container'>
            <div className="tire-track-loop"></div>
            <div className="tire-track-loop2"></div>
            <div className='TopColor'>
                <ul className="nav-menu">
                    <li><Link to="/home"><img src={logo} alt='Nossa logo' className='ImagemLogo' /></Link></li>
                    <li><input type='text' placeholder='Pesquisa' onClick={irParaPesquisa} className="Pesquisa" /></li>
                    <li><Link to="/esportivos" className='nav-link'>Esportivos</Link></li>
                    <li><Link to="/populares" className='nav-link'>Populares</Link></li>
                    <li><Link to="/usados" className='nav-link'>Usados</Link></li>
                    <li>
                        {tipoUsuario === 'Gerente' && (
                            <Link to="/cadastroproduto" className='nav-link'>Cadastro veiculo</Link>
                        )}
                    </li>
                    <li className='colorUser'><img src={userimg} className="ImagemUser" />Ola, {nomeUsuario}</li>
                </ul>
            </div>
            <EsportivoItens />
        </div>
    );
}

export default Esportivos;
