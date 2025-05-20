import './style.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo/logoLogin.png';

function Login() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/home');
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
                <h1 className="login-title">LOGIN</h1>
                <input type='email' placeholder='Email' className='login-input' />
                <input type='password' placeholder='Password' className='login-input' />
                <button onClick={handleLogin} className="login-button">LOGIN</button>
                <div className="criar-Conta">
                    <span>Crie sua conta.</span>
                </div>
            </div>
        </div>
    );
}

export default Login;
