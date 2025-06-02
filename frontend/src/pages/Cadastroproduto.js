import './home.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo/logo.png';
import userimg from './logo/user.png';
import { useState } from 'react';

function Cadastroproduto() {
    const navigate = useNavigate();
    const tipoUsuario = localStorage.getItem('tipoUsuario');
    const nomeUsuario = localStorage.getItem('nome');

    const [form, setForm] = useState({
        marca: '',
        modelo: '',
        cor: '',
        valor: '',
        ano: '',
        quilometragem: '',
        status: '',
        categoria: '',
        descricao: '',
        imagem: '',
        detalhesTecnicos: {
            motorizacao: '',
            peso: '',
            combustivel: '',
            velocidadeMaxima: ''
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name in form.detalhesTecnicos) {
            setForm(prev => ({
                ...prev,
                detalhesTecnicos: {
                    ...prev.detalhesTecnicos,
                    [name]: value
                }
            }));
        } else {
            setForm(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/itens/cadastroProduto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            if (response.ok) {
                alert('Produto cadastrado com sucesso!');
                navigate('/home');
            } else {
                const data = await response.json();
                alert(data.message || 'Erro ao cadastrar');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro na requisição.');
        }
    };

    return (
        <div className='Home_container'>
            <div className="tire-track-loop"></div>
            <div className="tire-track-loop2"></div>
            <div className='TopColor'>
                <ul className="nav-menu">
                    <li><Link to="/home"><img src={logo} alt='Logo' className='ImagemLogo' /></Link></li>
                    <li><Link to="/pesquisa"><input type='text' placeholder='Pesquisa' className="Pesquisa" /></Link></li>
                    <li><Link to="/esportivos" className='nav-link'>Esportivos</Link></li>
                    <li><Link to="/populares" className='nav-link'>Populares</Link></li>
                    <li><Link to="/usados" className='nav-link'>Usados</Link></li>
                    {tipoUsuario === 'Gerente' && (
                        <li><Link to="/cadastroproduto" className='nav-link'>Cadastro veículo</Link></li>
                    )}
                    <li className='colorUser'><img src={userimg} className="ImagemUser" alt="Usuário" />Olá, {nomeUsuario}</li>
                </ul>
            </div>

            <div className="container-inputs">
                <h2>Cadastrar produto</h2>
                <input type='text' name='marca' placeholder='Marca' onChange={handleChange} />
                <input type='text' name='modelo' placeholder='Modelo' onChange={handleChange} />
                <input type='text' name='cor' placeholder='Cor' onChange={handleChange} />
                <input type='number' name='valor' placeholder='Valor' onChange={handleChange} />
                <input type='number' name='ano' placeholder='Ano' onChange={handleChange} />
                <input type='number' name='quilometragem' placeholder='Km' onChange={handleChange} />

                {/* Detalhes Técnicos */}
                <input type='text' name='motorizacao' placeholder='Motorização' onChange={handleChange} />
                <input type='number' name='peso' placeholder='Peso (kg)' onChange={handleChange} />
                <input type='text' name='combustivel' placeholder='Combustível' onChange={handleChange} />
                <input type='text' name='velocidadeMaxima' placeholder='Velocidade Máxima' onChange={handleChange} />
            </div>

            <div className='situacao-radios'>
                <label>
                    Novo
                    <input type='radio' name='status' value="Novo" onChange={handleChange} />
                </label>
                <label>
                    Usado
                    <input type='radio' name='status' value="Usado" onChange={handleChange} />
                </label>
            </div>

            <div className='estilo-radios'>
                <label>
                    Popular
                    <input type='radio' name='categoria' value="Popular" onChange={handleChange} />
                </label>
                <label>
                    Esportivo
                    <input type='radio' name='categoria' value="Esportivo" onChange={handleChange} />
                </label>
            </div>

            <div className='descricao'>
                <textarea name='descricao' rows="9" cols="26" placeholder='Descrição' onChange={handleChange}></textarea>
                <button className="button-compra" onClick={handleSubmit}>Salvar</button>
            </div>

            <div className='rodape'>
                <label htmlFor="imagem">Anexar Imagem:</label>
                <input type="file" id="imagem" name="imagem" accept="image/*" disabled />
                <small style={{ color: 'gray' }}>Upload de imagem será implementado depois.</small>
            </div>
        </div>
    );
};

export default Cadastroproduto;
