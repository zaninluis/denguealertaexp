import logo from "../../assets/img/logotexto.png";
import "./header.css";

export function Header() {
  return (
    <header className="headerComponent">
      <img src={logo} alt="" className="logo"></img>
      <a href="#">Sair</a>
    </header>
  );
}
