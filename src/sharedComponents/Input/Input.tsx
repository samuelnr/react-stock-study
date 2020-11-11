import React from 'react';
import './Input.css';


// O objetivo de estender React.InputHTMLAttributes<HTMLInputElement> é para herdar todo o comportamento 
//e atributos ja definidos para o component nativo input, dessa maneira não é necessário redeclarar os atributos na props

declare interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label : string

}

const Input : React.FC<InputProps> = (props) => {

    return <div className="AppInput">
        <label>
            <span>{props.label}</span>
            <input />
        </label>

    </div>

}

export default Input;