# Discoteca — Ana

**Aluna:** Ana Beatriz da Silva Viotto  
**RA:** 26177016  
**Curso:** Análise e Desenvolvimento de Sistemas

## Sobre o projeto

Aplicação de página única (SPA) desenvolvida com React e React Router para cadastrar e visualizar álbuns musicais. O estado dos registros fica centralizado no componente `App.jsx`, e as páginas recebem dados e funções por meio de props.

## Meus parâmetros

Os parâmetros foram calculados usando os dígitos do RA `26177016`.

| Parâmetro | Cálculo | Resultado |
|---|---|---|
| A — Tema | 16 ÷ 20 = 0, resto 16 | Discoteca, rota `/discos` |
| B — Validação | Antepenúltimo dígito do RA | 0: álbum com no mínimo 3 caracteres, ignorando espaços nas pontas |
| C — Visualização | 2 + 6 + 1 + 7 + 7 + 0 + 1 + 6 = 30; 30 ÷ 6 = 5, resto 0 | Lista `<ul>`, um álbum por linha |
| D — Navbar | Quarto dígito contado do final: 7; 7 ÷ 4 = 1, resto 3 | Barra superior, nome à esquerda e links à direita, com a quantidade de álbuns |
| Cor principal | Últimos três dígitos: 016; 16 ÷ 360 = 0, resto 16 | `hsl(16, 60%, 35%)` |

## Campos do cadastro

- **Álbum:** nome do álbum musical.
- **Ano:** ano de lançamento.
- **Formato:** Vinil, CD ou Digital.
- **Artista:** nome do artista.

O formulário valida o preenchimento dos campos e exige que o nome do álbum tenha pelo menos três caracteres, desconsiderando os espaços no início e no final.

## Rotas

| Rota | Página |
|---|---|
| `/` | Página inicial |
| `/discos/novo` | Cadastro de álbum |
| `/discos` | Visualização dos álbuns |
| Qualquer rota inexistente | Página não encontrada |

## Tecnologias utilizadas

- React
- Vite
- React Router DOM
- JavaScript
- HTML e CSS

## Como executar o projeto

É necessário ter o Node.js e o npm instalados.

1. Abra o terminal na pasta do projeto.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra no navegador o endereço exibido no terminal, normalmente `http://localhost:5173`.

## Funcionalidades implementadas

- Navegação entre páginas com React Router.
- Destaque do link ativo na navbar.
- Contagem de álbuns na página inicial e na navbar.
- Formulário controlado para cadastrar álbuns.
- Validação dos campos e do nome do álbum.
- Inclusão de registros no estado centralizado do `App.jsx`.
- Visualização em lista com `map` e `key`.
- Mensagem de sucesso após o cadastro.
- Página de rota inexistente com o caminho acessado.
- Rodapé com nome completo e RA em todas as páginas.

## Funcionalidades opcionais

Nenhuma funcionalidade opcional foi implementada até o momento.

## Autoria

**Ana Beatriz da Silva Viotto — RA 26177016**
