
import { Link, useLocation } from 'react-router-dom';

// Recebe o título e a lista de álbuns do App.jsx.
function Visualizacao({ title, registros }) {
  const location = useLocation();
  const mensagem = location.state?.mensagem;

  return (
    <main className="pagina">
      <h1>{title}</h1>

      {mensagem && (
        <p className="sucesso">{mensagem}</p>
      )}

      {registros.length === 0 ? (
        <p>
          Nenhum álbum cadastrado.{' '}
          <Link to="/discos/novo">Cadastre o primeiro álbum.</Link>
        </p>
      ) : (
        <ul className="lista-albuns">
          {registros.map((registro) => (
            <li key={registro.id} className="item-album">
              <strong>{registro.album}</strong>
              <span>Ano: {registro.ano}</span>
              <span>Formato: {registro.formato}</span>
              <span>Artista: {registro.artista}</span>
            </li>
          ))}
        </ul>
      )}

      <Link className="botao" to="/discos/novo">
        Cadastrar outro álbum
      </Link>
    </main>
  );
}

export default Visualizacao;
