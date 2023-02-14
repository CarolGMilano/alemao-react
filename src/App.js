import './App.css';
import Cabecalho from "./componentes/Cabecalho";
import Formulario from "./componentes/Formulario";
import Categoria from "./componentes/Categoria";
import { useState } from 'react';

function App() {
  const categorias = [
    {
      nome: 'Feminino',
      artigo: 'die',
      corPrimaria: 'rgb(250, 160, 160)',
      corSecundaria: 'rgba(250, 160, 160, 0.2)'
    },
    {
      nome: 'Masculino',
      artigo: 'der',
      corPrimaria: 'rgb(173, 216, 230)',
      corSecundaria: 'rgba(173, 216, 230, 0.2)'
    },
    {
      nome: 'Neutro',
      artigo: 'das',
      corPrimaria: 'rgb(159, 226, 191)',
      corSecundaria: 'rgba(159, 226, 191, 0.2)'
    }
  ]

  const [cartoes, setCartoes] = useState([]);

  const aoNovoCartao = (cartao) => {
    setCartoes([...cartoes, cartao])
  }

  const aoDeletar = (id) => {
    setCartoes(cartoes.filter(cartao => cartao.id !== id))
  }

  return (
    <div className="App">
      <div className="container">
        <Cabecalho />
        
        <Formulario 
          categorias={categorias}
          aoCadastrarPalavra={card => aoNovoCartao(card)}
        />
      </div>

      {categorias.map (categoria =>
        <Categoria 
          key={categoria.nome}
          nome={categoria.nome}
          artigo={categoria.artigo}
          corPrimaria={categoria.corPrimaria}
          corSecundaria={categoria.corSecundaria}
          aoDeletar={aoDeletar}
          cartoes={cartoes.filter(cartao => cartao.genero === categoria.nome)}
        />
      )}
    </div>
  );
}

export default App;
