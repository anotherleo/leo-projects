import './Select.css';

function Select(props) {
    return (
        <div className="input__select">
            <label>
                {props.label}
            </label>
            <select 
                onChange={evento => props.aoAlterado(evento.target.value)}
                value={props.valor}
            >
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Select;