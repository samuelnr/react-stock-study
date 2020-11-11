import React from 'react';
import './Button.css';

// O '?' nos atributos indica que ele é opcional
declare interface ButtonProps {
    content? : string
    appendIcon? : JSX.Element,
    onClick?: () => void
}

const Button : React.FC<ButtonProps> = (props) => {

    return <button className="AppButton" onClick={ props.onClick } >{props.content || 'Nameless Button' } - {props.children} {props.appendIcon} </button> 

}

export default Button;