import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleTheme() {
    setDark((prev) => {
      const newValue = !prev;
      document.body.classList.toggle("dark-theme", newValue);
      return newValue;
    });
  }

  return (
    <header>
      <h1 className="logo-portfolio">Nivaldo Oliveira</h1>

      <nav>
        <ul id="menu" className={menuOpen ? "active" : ""}>
          <li>
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
          </li>

          <li>
            <a href="#projetos" onClick={closeMenu}>Projetos</a>
          </li>

          <li>
            <a href="#contato" onClick={closeMenu}>Contato</a>
          </li>

          <li>
            <button id="btn-tema" onClick={toggleTheme}>
              <i className={dark ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
            </button>
          </li>
        </ul>

        {/* HAMBURGUER */}
        <div
          id="menu-hamburguer"
          className={menuOpen ? "active" : ""}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
} 
