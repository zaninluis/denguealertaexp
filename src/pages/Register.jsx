import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

import logo from "../assets/img/logo.png";
import bg from "../assets/img/gmaps.jpg";

export function Register() {
  const navigate = useNavigate();
  const handleSubmitRegister = (event) => {
    event.preventDefault();

    const nome = event.target.nome.value;
    const email = event.target.email.value;
    const endereco = event.target.endereco.value;
    const cpf = event.target.cpf.value;
    const senha = event.target.senha.value;

    fetch("https://denguealerta202401-production.up.railway.app/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        email,
        endereco,
        cpf,
        senha,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        // Redirecionar para tela de login
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao efetuar cadastro, preencha todos os campos!");
      });
  };

  return (
    <>
      <main className="content mb-5" style={{ backgroundImage: `url(${bg})` }}>
        <img src={logo} width="140" />
        <form onSubmit={handleSubmitRegister}>
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
            maxLength="11"
            minLength="11"
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
