
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Recebe do App.jsx a função responsável por adicionar um álbum.
function Cadastro({ adicionarRegistro }) {
  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    album: '',
    ano: '',
    formato: '',
    artista: '',
  });

  const [erro, setErro] = useState('');

  // Atualiza o estado conforme os campos são preenchidos.
  function handleChange(event) {
    const { name, value } = event.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));

    setErro('');
  }

  // Valida os dados e envia o novo álbum para o App.
  function handleSubmit(event) {
    event.preventDefault();

    if (
      !formulario.album.trim() ||
      !formulario.ano.trim() ||
      !formulario.formato ||
      !formulario.artista.trim()
    ) {
      setErro('Preencha todos os campos.');
      return;
    }

    if (formulario.album.trim().length < 3) {
      setErro('O nome do álbum deve ter pelo menos 3 caracteres.');
      return;
    }

    if (Number(formulario.ano) <= 0) {
      setErro('O ano deve ser maior que zero.');
      return;
    }

    adicionarRegistro({
      id: Date.now(),
      album: formulario.album.trim(),
      ano: Number(formulario.ano),
      formato: formulario.formato,
      artista: formulario.artista.trim(),
    });

    navigate('/discos', {
      state: { mensagem: 'Álbum cadastrado com sucesso!' },
    });
  }

  return (
    <main className="pagina">
      <h1>Cadastrar álbum</h1>
      <p>Preencha os dados do álbum musical.</p>

      <form className="formulario" onSubmit={handleSubmit}>
        <label htmlFor="album">Nome do álbum</label>
        <input
          id="album"
          name="album"
          value={formulario.album}
          onChange={handleChange}
          placeholder="Digite o nome do álbum"
          required
        />

        <label htmlFor="ano">Ano</label>
        <input
          id="ano"
          name="ano"
          type="number"
          min="1"
          value={formulario.ano}
          onChange={handleChange}
          placeholder="Ex.: 2025"
          required
        />

        <label htmlFor="formato">Formato</label>
        <select
          id="formato"
          name="formato"
          value={formulario.formato}
          onChange={handleChange}
          required
        >
          <option value="">Selecione um formato</option>
          <option value="Vinil">Vinil</option>
          <option value="CD">CD</option>
          <option value="Digital">Digital</option>
        </select>

        <label htmlFor="artista">Artista</label>
        <input
          id="artista"
          name="artista"
          value={formulario.artista}
          onChange={handleChange}
          placeholder="Digite o nome do artista"
          required
        />

        {erro && <p className="erro">{erro}</p>}

        <button className="botao" type="submit">
          Salvar álbum
        </button>
      </form>
    </main>
  );
}

export default Cadastro;
