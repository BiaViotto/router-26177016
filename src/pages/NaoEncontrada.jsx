
import { Link, useLocation } from 'react-router-dom';

// useLocation permite consultar o caminho acessado pelo usuário.
function NaoEncontrada() {
  const location = useLocation();

  return (
    <main className="pagina nao-encontrada">
      <h1>Página não encontrada</h1>

      <p>Não encontramos a página solicitada.</p>

      <p>
        Caminho acessado: <strong>{location.pathname}</strong>
      </p>

      <Link className="botao" to="/">
        Voltar para o início
      </Link>
    </main>
  );
}

export default NaoEncontrada;
