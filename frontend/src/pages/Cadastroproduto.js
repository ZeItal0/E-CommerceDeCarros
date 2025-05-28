import './home.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo/logo.png'

function Cadastroproduto() {
    const navigate = useNavigate();
    const tipoUsuario = localStorage.getItem('tipoUsuario');
    return (
        <div className='Home_container'>
            <div className="tire-track-loop"></div>
            <div className="tire-track-loop2"></div>
            <div className='TopColor'>
                <ul className="nav-menu">
                    <li><Link to="/home"><img src={logo} alt='Nossa logo' className='ImagemLogo' /></Link></li>
                    <li><Link to="/pesquisa"><input type='carros' placeholder='Pesquisa' className="Pesquisa" /></Link></li>
                    <li><Link to="/esportivos" className='nav-link'>Esportivos</Link></li>
                    <li><Link to="/populares" className='nav-link'>Populares</Link></li>
                    <li><Link to="/usados" className='nav-link'>Usados</Link></li>
                    <li>
                        {tipoUsuario === 'Gerente' && (
                            <Link to="/cadastroproduto" className='nav-link'>Cadastro veiculo</Link>
                        )}
                    </li>
                    <a></a>
                </ul>
            </div>
            <div className="container-inputs">
                <h2>Cadastrar produto</h2>
                <input type='Text' placeholder='marca' />
                <input type='Text' placeholder='modelo' />
                <input type='Text' placeholder='cor' />
                <input type='number' placeholder='valor' />
                <input type='date' placeholder='ano' />
                <input type='km' placeholder='km' />
            </div>
            <div className='situacao-radios'>
                <label>
                    Novo
                    <input type='radio' name='situacao' value="novo" />
                </label>
                <label>
                    Usado
                    <input type='radio' name='situacao' value="usado" />
                </label>
            </div>
            <div className='estilo-radios'>
                <label>
                    Popular
                    <input type='radio' name='estilo' value="Popular" />
                </label>
                <label>
                    Esportivo
                    <input type='radio' name='estilo' value="Esportivo" />
                </label>
            </div>
            <div className='descricao'>
                <textarea name='Descricao' rows="9" cols="26" placeholder='Descricao'></textarea>
                <button className="button-compra">Salvar</button>
            </div>
            <div className='rodape'>
                <label for="imagem">Anexar Imagem:</label>
                <input type="file" id="imagem" name="imagem" accept="image/*"></input>
            </div>
        </div>
    );

};
export default Cadastroproduto;