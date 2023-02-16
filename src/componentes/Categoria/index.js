import './categoria.css';
import Cartao from '../Cartao';

const Categoria = ({ cartoes, nome, artigo, corSecundaria, aoDeletar, corPrimaria }) => {
  return (
    (cartoes.length > 0) && <section 
      className="categoria" 
      style={{backgroundColor: corSecundaria}}
    >
      <h3>{nome}<span style={{ color: corPrimaria }}>.</span></h3>

      <div className="cartoes">
        {cartoes.map(cartao => {
            return <Cartao 
                key={cartao.palavra}
                artigo={artigo}
                palavra={cartao.palavra}
                traducao={cartao.traducao}
                corDeFundo={corPrimaria}  
                deletarCard={aoDeletar}
                id={cartao.id}                  
            />
          }
        )}
      </div>
    </section>
  );
}

export default Categoria;
