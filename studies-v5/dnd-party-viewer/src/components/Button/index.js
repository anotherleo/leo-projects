import './Button.css';

function Button(props) {
    return (
        <button className="input__button">
            {props.children}
        </button>
    )
}

export default Button;