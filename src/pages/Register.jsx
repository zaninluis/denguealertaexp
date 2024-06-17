import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

import logo from "../assets/img/logo.png";
import bg from "../assets/img/gmaps.jpg";

export function Register() {
  return (
    <>
      <main className="content mb-5" style={{ backgroundImage: `url(${bg})` }}>
        <img src={logo} width="140" />
        <form>
          <input
            type="text"
            placeholder="digite seu nome"
            name="nome"
            required
            className="input mb-5"
          />
          <input
            type="email"
            placeholder="digite seu email"
            name="email"
            required
            className="input mb-5"
          />
          <input
            type="text"
            placeholder="digite seu endereço"
            name="endereco"
            required
            className="input mb-5"
          />
          <input
            type="text"
            placeholder="digite seu CPF"
            name="cpf"
            maxLength={11}
            minLength={11}
            className="input mb-5"
          />
          <input
            type="password"
            placeholder="digite sua senha"
            name="senha"
            required
            className="input mb-5"
          />

          <button className="btn" type="submit mb-5">
            Cadastrar
          </button>
        </form>

        <Link to="/" className="mb-5">
          Voltar para login
        </Link>
      </main>
      <Footer />
    </>
  );
}
