import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import logo from "../../assets/img/logotexto.png";
import "./header.css";

export function Header() {
  const { logout } = useContext(UserContext);

  return (
    <header className="headerComponent">
      <img src={logo} alt="" className="logo"></img>
      <a href="#" onClick={() => logout()}>
        Sair
      </a>
    </header>
  );
}
