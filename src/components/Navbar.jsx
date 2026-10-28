
import { NavLink } from 'react-router-dom';

// Recebe do App a quantidade de álbuns cadastrados.
function Navbar({ quantidade }) {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-titulo">
        Discoteca — Ana
      </NavLink>

      <div className="navbar-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'link ativo' : 'link'
          }
        >
          Início
        </NavLink>

        <NavLink
          to="/discos/novo"
          className={({ isActive }) =>
            isActive ? 'link ativo' : 'link'
          }
        >
          Cadastrar
        </NavLink>

        <NavLink
          to="/discos"
          className={({ isActive }) =>
            isActive ? 'link ativo' : 'link'
          }
        >
          Álbuns ({quantidade})
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
