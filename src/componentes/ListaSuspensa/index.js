import './listaSuspensa.css';

const ListaSuspensa = ({label, categorias, obrigatorio, aoAlterar, valor}) => {
  return (
    <div className="lista">
      <label>{label}</label>

      <select 
        onChange={evento => aoAlterar(evento.target.value)} 
        required={obrigatorio} 
        value={valor}
      >
        <option value=""></option>
        {categorias.map(categoria => {
                return <option key={categoria.nome}>{categoria.nome}</option>
            }
        )}
      </select>
    </div>
  );
}

export default ListaSuspensa;
