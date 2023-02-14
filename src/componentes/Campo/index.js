import './campo.css';

const Campo = ({label, placeholder, obrigatorio, valor, aoAlterar}) => {

    const aoDigitar = (evento) => {
        aoAlterar(evento.target.value)
    }

    return (
        <div className="campo">
            <label htmlFor={label}>{label}</label>
            <input 
                value={valor} 
                onChange={aoDigitar} 
                required={obrigatorio} 
                type="text" 
                id={label} 
                placeholder={placeholder}
            ></input>
        </div>
    );
}

export default Campo;
