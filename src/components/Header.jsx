import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function toggleTheme() {
    setDark(!dark);
    document.body.classList.toggle("dark-theme");
  }

  return (
    <header>
      <h1 className="logo-portfolio">Nivaldo Oliveira</h1>

      <nav>
        <ul id="menu" className={menuOpen ? "active" : ""}>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>

          <li>
            <button id="btn-tema" onClick={toggleTheme}>
              <i className="fa-solid fa-moon"></i>
            </button>
          </li>
        </ul>

        <div id="menu-hamburguer" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </header>
  );
}