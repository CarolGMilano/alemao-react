import './formulario.css';
import Campo from '../Campo';
import Botao from '../Botao';
import ListaSuspensa from '../ListaSuspensa';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({categorias, aoCadastrarPalavra}) => {

   const [palavra, setPalavra] = useState('');
   const [traducao, setTraducao] = useState('');
   const [genero, setGenero] = useState('');

   const aoSubmeter = (evento) => {
      evento.preventDefault();

      aoCadastrarPalavra({
         palavra, 
         traducao, 
         genero,
         id: uuidv4()
      });

      setPalavra('');
      setTraducao('');
      setGenero('');
   }

   return (
      <section className="formulario">
         <form onSubmit={aoSubmeter}>
            <h2>Crie um cartão</h2>
            <h3>Preencha os dados para adicionar uma nova palavra à sua lista</h3>

            <Campo 
               obrigatorio
               label="Substantivo" 
               placeholder="Digite um substantivo"
               valor={palavra}
               aoAlterar={valor => setPalavra(valor)}
            />

            <Campo 
               obrigatorio
               label="Tradução" 
               placeholder="Digite uma tradução"
               valor={traducao}
               aoAlterar={valor => setTraducao(valor)}
            />

            <ListaSuspensa 
               obrigatorio
               label="Gênero" 
               categorias={categorias}
               valor={genero}
               aoAlterar={valor => setGenero(valor)}
            />

            <Botao>Adicionar palavra</Botao>
         </form>
      </section>
   );
}

export default Formulario;
