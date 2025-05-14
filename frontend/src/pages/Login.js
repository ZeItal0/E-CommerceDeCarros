import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className="Login_container">
      <h2>Login</h2>
      <input type="text" placeholder="Usuário" />
      <input type="password" placeholder="Senha" />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;