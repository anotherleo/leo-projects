import './Select.css';

function Select(props) {
    return (
        <div className="input__select">
            <label>
                {props.label}
            </label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Select;