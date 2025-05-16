import './style.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo/logoLogin.png'

function Login(){
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/home');
    };

    return (
        <div className='Login_container'>
            <div className='LeftColor'></div>
            <div className='LoginText'>
                <img src={logo} alt='Nossa logo' className='ImagemLogo'/>
                <h1>Login</h1>
            </div>
            <div className='textFields'>
                <input type='Email' placeholder='Email'/>
                <input type='Senha' placeholder='Senha'/>
                <button onClick={handleLogin}>Entrar</button>
            </div>
        </div>

    );
}
export default Login;