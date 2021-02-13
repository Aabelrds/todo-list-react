import React from 'react';


// String hijo onClick, style, icono. Tipo por defecto: ‘primary’. Otros tipos: ’secondary’ y ‘alert’. 

const getClasses = style => {
    if(style === 'secondary') return 'button--secondary';
    if(style === 'alert') return 'button--alert';
    if(style === 'disabled') return 'button--disabled';
    return 'button--primary';
}

const Button = props => {

    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            className={`button ${getClasses(props.style)}`}
        >
            {props.icon ? <img src={props.icon} alt="icon" /> : null}
            {props.children}
        </button>
    )
}