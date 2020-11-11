import React, {useState, useEffect } from 'react';
import './TestComponent.css';

//Compponente
/*
const TestComponent = () => (

    <div className="TestComponent">Test Component</div>

)
*/

/**
 * Sem a utilização do hook stage.age é atualizado mas o virtual Dom não é atualizado
 * @param props 
 */

function TestComponent(props : { name : string }) {

    const [age, setAge] = useState(21);
    
    useEffect( () => {
        console.log('componente funcional criado ');
    } ,
    []);

    useEffect( () => {
        console.log('componente funcional atualizado ' + age);
    },
    [age]);

    console.log();

    return <div className="TestComponent">Test Component: {props.name} , {age} 
    
        <button onClick={() => {
            setAge(age + 1);
            console.log (age); 
            }} >Incrementa Age </button>
    </div>

   

}

export default TestComponent;