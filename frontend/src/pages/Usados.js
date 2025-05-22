import './home.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo/logo.png'
import UsadosItens from '../components/UsadosItens';

function Usados() {
    const navigate = useNavigate();

    return (
        <div className='Home_container'>
            <div className='TopColor'>
                <ul className="nav-menu">
                    <li><Link to="/home"><img src={logo} alt='Nossa logo' className='ImagemLogo' /></Link></li>
                    <li><Link to="/pesquisa"><input type='carros' placeholder='Pesquisa' /></Link></li>
                    <li><Link to="/esportivos">Esportivos</Link></li>
                    <li><Link to="/populares">Populares</Link></li>
                    <li><Link to="/usados">Usados</Link></li>
                    <li><Link to="/cadastroproduto">Cadastro veiculo</Link></li>
                    <a id='carrinho' href='#'>Carrinho</a>
                </ul>
            </div>
            <UsadosItens />

        </div>
    );

};
export default Usados;