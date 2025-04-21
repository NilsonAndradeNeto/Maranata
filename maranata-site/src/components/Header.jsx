import React from "react";
import Logo from "../assets/img/LogoMaranata.png";


import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-green-800 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow">
      <img src={Logo} alt="Logo Maranata" className="h-12" />
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/como-ajudar">Como Ajudar</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}
