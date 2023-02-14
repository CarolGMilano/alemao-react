import './cartao.css';
import { AiFillCloseCircle } from 'react-icons/ai';

const Cartao = ({id, artigo, corDeFundo, palavra, traducao, deletarCard}) => {
    return (
        <div className="cartao">
            <AiFillCloseCircle size={22} onClick={() => deletarCard (id)}/>

            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                <h4><span>{artigo}</span> {palavra}</h4>
            </div>

            <div className="corpo">
                <p>{traducao}</p>
            </div>
        </div>
    );
}

export default Cartao;
