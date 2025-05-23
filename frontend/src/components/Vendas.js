import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./logo/logo.png";

function Vendasd() {
  const navigate = useNavigate();

  const irParaPesquisa = () => {
    navigate("/pesquisa?categoria");
  };

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
      <div>
        <label>
          Nome
          <input type="text" name="nome" value="nome" />
        </label>

        <label>
          endereco
          <input type="text" name="endereco" value="endereco" />
        </label>

        <label>
          Email
          <input type="text" name="email" value="email" />
        </label>
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
        <button>finalizar</button>
      </div>
    </div>
  );
}

export default Vendas;
