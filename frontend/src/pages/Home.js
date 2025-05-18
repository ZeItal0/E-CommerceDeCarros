import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './home.css';
import { Link, useNavigate } from 'react-router-dom';
import car from './cars/carros-esportivos.png'
import logo from './logo/logo.png'
import ListaDeItens from "../components/ListaDeItens";

function Home(){
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/');
    };

    return (
    <div className='Home_container'>
        <div className='TopColor'>
            <ul className="nav-menu">
                <li><Link to="/home"><img src={logo} alt='Nossa logo' className='ImagemLogo'/></Link></li>
                <li><input type='carros' placeholder='Pesquisa'/></li>
                <li><Link to="/esportivos">Esportivos</Link></li>
                <li><Link to="/populares">Populares</Link></li>
                <li><Link to="/usados">Usados</Link></li>
                <a id='carrinho' href='#'>Carrinho</a>
                <a></a>
            </ul>
        </div>
        <div className='MedioColor'>
            <Slider dots={true} infinite={true} speed={500} slidesToShow={7} slidesToScroll={1}>
                <div><img src={car} alt='cartest' className='carroY'/></div>
                <div><img src={car} alt='cartest' className='carroY'/></div>
                <div><img src={car} alt='cartest' className='carroY'/></div>
                <div><img src={car} alt='cartest' className='carroY'/></div>
                <div><img src={car} alt='cartest' className='carroY'/></div>
                <div><img src={car} alt='cartest' className='carroY'/></div>
                <div><img src={car} alt='cartest' className='carroY'/></div>
            </Slider>
        </div>
            <ListaDeItens />

    </div>
    );

};
export default Home;