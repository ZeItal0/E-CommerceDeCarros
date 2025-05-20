import './home.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo/logo.png'

function Cadastroproduto() {
    const navigate = useNavigate();

    return (
        <div className='Home_container'>
            <div className='TopColor'>
                <ul className="nav-menu">
                    <li><Link to="/home"><img src={logo} alt='Nossa logo' className='ImagemLogo' /></Link></li>
                    <li><input type='carros' placeholder='Pesquisa' /></li>
                    <li><Link to="/esportivos">Esportivos</Link></li>
                    <li><Link to="/populares">Populares</Link></li>
                    <li><Link to="/usados">Usados</Link></li>
                    <li><Link to="/cadastroproduto">Cadastro veiculo</Link></li>
                    <a id='carrinho' href='#'>Carrinho</a>
                    <a></a>
                </ul>
            </div>
            <div className="container-inputs">
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
                <button>Salvar</button>
            </div>
            <div className='rodape'>
                <label for="imagem">Anexar Imagem:</label>
                <input type="file" id="imagem" name="imagem" accept="image/*"></input>
            </div>
        </div>
    );

};
export default Cadastroproduto;