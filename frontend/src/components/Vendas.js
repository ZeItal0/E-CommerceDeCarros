import "../pages/home.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../pages/logo/logo.png";
import { useLocation } from "react-router-dom";

function Vendas() {
  const navigate = useNavigate();

  const irParaPesquisa = () => {
    navigate("/pesquisa?categoria");
  };

  const location = useLocation();
  const { item } = location.state || {};

  return (
    <div className="Home_container">
      <div className="TopColor">
        <ul className="nav-menu">
          <li>
            <Link to="/home">
              <img src={logo} alt="Nossa logo" className="ImagemLogo" />
            </Link>
          </li>
          <li>
            <input
              type="text"
              placeholder="Pesquisa"
              onClick={irParaPesquisa}
              className="Pesquisa"
            />
          </li>
          <li>
            <Link to="/esportivos" className="nav-link">
              Esportivos
            </Link>
          </li>
          <li>
            <Link to="/populares" className="nav-link">
              Populares
            </Link>
          </li>
          <li>
            <Link to="/usados" className="nav-link">
              Usados
            </Link>
          </li>
          <li>
            <Link to="/cadastroproduto" className="nav-link">
              Cadastro veiculo
            </Link>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="container-compra">
          <h2>Confirme os dados da compra</h2>
          <img src={`http://localhost:5000${item.imagem}`} alt={`${item.marca} ${item.modelo}`} className='selecionadoVenda' />
          <a>{item.marca} {item.modelo} ({item.status})</a>
          <a>R$ {item.valor}</a>
          <a>{item.cor}<span className='cor' style={{ backgroundColor: item.cor }}></span></a>
        </div>
        <div className="container-vendas">
          <h2>Dados pessoais</h2>
          <label>
            <input type="text" placeholder="Nome" />
          </label>

          <label>
            <input type="text" placeholder="Endereço" />
          </label>

          <label>
            <input type="text" placeholder="Email" />
          </label>
          <div className="finalizar-input">
            <label>
            forma de pagamento
            <select name="pagamento">
              <option value="pix">Pix</option>
              <option value="credito">Credito</option>
              <option value="debito">Debito</option>
              <option value="boleto">Boleto</option>
              <option value="cheque">Cheque</option>
              <option value="dinheiro">Dinheiro</option>
            </select>
          </label>
          </div>
          <button className="button-compra">Finalizar</button>
        </div>
      </div>
    </div>
  );
}

export default Vendas;
