import React, { useState } from 'react';
import './App.css';
import Header from '../Header';
import Button from '../../sharedComponents/Button';
import Container from '../../sharedComponents/Container';
import Input from '../../sharedComponents/Input';

//import logo from './logo.svg';
// O arquivo index.ts remove a necessidade dessa linha
//import TestComponent from './components/TestComponent/TestComponent';
//import TestComponent from '../TestComponent';
// import ClassComponent from '../ClassComponent';


function ComponentImg() {

  return <img src="https://cdn.dentalspeed.com/produtos/550/lupa-de-mao-3x-75mm.png" width="14" alt="img web" />
}

function App() {

  const [street, setStreet] = useState('');

  return (
    <div className="App">

      <Header title="title param"/>

      <Container>
        <Button 
          content="Meu Botao" 
          appendIcon={<ComponentImg></ComponentImg>}
          onClick={() => window.alert('meu alerta')}>
          <span>Conteudo Filho do Span</span>
        </Button>

        <Input 
          label="Rua" 
          placeholder="informe a rua" 
          onChange={e => setStreet(e.target.value)}
          />

          <ul>
          {

            ['manoel','rafael','samuel'].map((name, index) => {
                return <li key={index}>{name}</li>;
            })
          }
          </ul>


      </Container>




      { /* -- Estudo de Class Components x Functional Components
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestComponent name="samuel"/> 
        <ClassComponent name="name props"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */ }
    </div>
  );
}

export default App;