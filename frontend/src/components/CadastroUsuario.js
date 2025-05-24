import '../pages/home.css';
import { Link, useNavigate } from "react-router-dom";
import logo from "../pages/logo/logo.png";

function CadastroUsuario() {
  const navigate = useNavigate();

  const irParaPesquisa = () => {
    navigate("/pesquisa?categoria");
  };

  return (
    <div className='login-wrapper'>
      <div className='login-left'>
        <div className="left-content">
          <h2>BEM VINDO</h2>
          <p>Sinta a velocidade</p>
        </div>
      </div>

      <div className='login-right'>
        <img src={logo} alt='Logo' className='login-logo' />
        <h1 className="login-title">Cadastro</h1>
        <input type="text" name="nome" className='login-input' placeholder='Nome' />
        <input type="text" name="endereco" className='login-input' placeholder='Endereço' />
        <input type="text" name="email" className='login-input' placeholder='Email' />
        <input type="password" name="senha" className='login-input' placeholder='Senha' />
        <button className="button-cadastro">Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastroUsuario;
