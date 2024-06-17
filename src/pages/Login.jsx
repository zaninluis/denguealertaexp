import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

import logo from "../assets/img/logo.png";
import bg from "../assets/img/gmaps.jpg";

export function Login() {
  return (
    <>
      <main className="content mb-5" style={{ backgroundImage: `url(${bg})` }}>
        <img src={logo} width="140" />

        <form>
          <input
            type="email"
            placeholder="digite seu email"
            name="email"
            required
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
            Entrar
          </button>
        </form>

        <Link to="/register" className="mb-5">
          Crie sua conta
        </Link>
      </main>
      <Footer />
    </>
  );
}
