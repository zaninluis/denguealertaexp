import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Footer } from "../components/Footer";
import logo from "../assets/img/logo.png";
import bg from "../assets/img/gmaps.jpg";

export function Login() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const senha = event.target.senha.value;

    fetch("https://denguealerta202401-production.up.railway.app/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        senha,
      }),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error();
        }
        return response.text(); // promise que vai resolver o json webtoken do usuario
      })
      .then((data) => {
        console.log(data); // aqui eu tenho o json webtoken do usuario
        // salvar webtoken no contexto global
        login(data);
        // redirecionar para /home
        navigate("/home");
      })
      .catch(() => alert("Verifique usuário ou senha!"));
  };

  return (
    <>
      <main className="content mb-5" style={{ backgroundImage: `url(${bg})` }}>
        <img src={logo} width="140" />

        <form onSubmit={handleSubmitLogin}>
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
          <button className="btn mb-5" type="submit">
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
