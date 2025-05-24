import './home.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo/logo.png'
import UsadosItens from '../components/UsadosItens';

function Usados() {
    const navigate = useNavigate();

    const irParaPesquisa = () => {
        navigate('/pesquisa?&status=usado');
    };

    return (
        <div className='Home_container'>
            <div className='TopColor'>
                <ul className="nav-menu">
                    <li><Link to="/home"><img src={logo} alt='Nossa logo' className='ImagemLogo' /></Link></li>
                    <li><input type='text' placeholder='Pesquisa' onClick={irParaPesquisa} className="Pesquisa"/></li>
                    <li><Link to="/esportivos" className='nav-link'>Esportivos</Link></li>
                    <li><Link to="/populares" className='nav-link'>Populares</Link></li>
                    <li><Link to="/usados" className='nav-link'>Usados</Link></li>
                    <li><Link to="/cadastroproduto" className='nav-link'>Cadastro veiculo</Link></li>
                    
                </ul>
            </div>
            <UsadosItens />

        </div>
    );

};
export default Usados;