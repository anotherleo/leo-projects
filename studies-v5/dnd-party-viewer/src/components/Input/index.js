import './Input.css';

function Input(props) {
    return (
        <div className="input__text">
            <label>
                {props.label}
            </label>
            <input placeholder={props.placeholder} />
        </div>
    )
}

export default Input;