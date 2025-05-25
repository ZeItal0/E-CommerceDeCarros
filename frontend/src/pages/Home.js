import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './home.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo/logo.png';
import ListaDeItens from "../components/ListaDeItens";

function Home() {
    const navigate = useNavigate();
    const [carros, setCarros] = useState([]);
    const tipoUsuario = localStorage.getItem('tipoUsuario');
    const handleLogin = () => {
        navigate('/');
    };
    useEffect(() => {
        const fetchItens = async () => {
            const res = await fetch('http://localhost:5000/api/itens');
            const data = await res.json();
            setCarros(data.slice(0, 10));
        };
        fetchItens();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    }

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

                </ul>
            </div>
            <div className='MedioColor'>
                <Slider {...settings}>
                    {carros.map((item) => (
                        <div key={item._id} className="carousel-item">
                            <img src={`http://localhost:5000${item.imagem}`} alt={`${item.marca} ${item.modelo}`} className='carroY' />
                        </div>
                    ))}
                </Slider>
            </div>
            <ListaDeItens />

        </div>
    );

};
export default Home;