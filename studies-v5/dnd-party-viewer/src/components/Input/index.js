import './Input.css';
import { useState } from "react";

function Input(props) {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className="input__text">
            <label>
                {props.label}
            </label>
            <input 
                value={props.valor}
                onChange={aoDigitado}
                placeholder={props.placeholder} 
            />
        </div>
    )
}

export default Input;