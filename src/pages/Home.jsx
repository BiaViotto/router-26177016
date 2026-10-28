
import { Link } from 'react-router-dom';

// A Home recebe a quantidade de álbuns calculada no App.jsx.
function Home({ quantidade }) {
  return (
    <main className="pagina">
      <h1>Discoteca — Ana</h1>

      <p>
        Bem-vinda à sua discoteca personalizada!
      </p>

      <p>
        Álbuns cadastrados: <strong>{quantidade}</strong>
      </p>

      <div className="acoes">
        <Link className="botao" to="/discos/novo">
          Cadastrar álbum
        </Link>

        <Link className="botao botao-secundario" to="/discos">
          Visualizar álbuns
        </Link>
      </div>
    </main>
  );
}

export default Home;
