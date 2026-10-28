
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Rodape from './components/Rodape';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Visualizacao from './pages/Visualizacao';
import NaoEncontrada from './pages/NaoEncontrada';

import './index.css';

// O estado centralizado guarda todos os álbuns cadastrados.
function App() {
  const [registros, setRegistros] = useState([
    {
      id: 1,
      album: 'Thriller',
      ano: 1982,
      formato: 'Vinil',
      artista: 'Michael Jackson',
    },
    {
      id: 2,
      album: '21',
      ano: 2011,
      formato: 'CD',
      artista: 'Adele',
    },
    {
      id: 3,
      album: 'Random Access Memories',
      ano: 2013,
      formato: 'Digital',
      artista: 'Ana Beatriz da Silva Viotto — RA 26177016',
    },
  ]);

  // Calcula a quantidade de álbuns cadastrados.
  const quantidade = registros.length;

  // Adiciona um álbum sem alterar diretamente o array anterior.
  function adicionarRegistro(novoRegistro) {
    setRegistros((anteriores) => [...anteriores, novoRegistro]);
  }

  return (
    <div className="app">
      <Navbar quantidade={quantidade} />

      <div className="conteudo">
        <Routes>
          <Route
            path="/"
            element={<Home quantidade={quantidade} />}
          />

          <Route
            path="/discos/novo"
            element={
              <Cadastro adicionarRegistro={adicionarRegistro} />
            }
          />

          <Route
            path="/discos"
            element={
              <Visualizacao
                title="Álbuns cadastrados"
                registros={registros}
              />
            }
          />

          <Route
            path="*"
            element={<NaoEncontrada />}
          />
        </Routes>
      </div>

      <Rodape />
    </div>
  );
}

export default App;
