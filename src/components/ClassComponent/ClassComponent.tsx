import React from 'react';


//Componentes baseados em classes ...

class ClassComponent extends React.Component<{ name: string }> {

    // Primeiro step do cliclo de vida de um componente 
    // execução do construtor
    constructor(props : any) {
        super(props);
        console.log ('1 construtor montado');
    }

    state = {
        name : 'mundo !!!!'
    }

    // 3o step componente montado
    componentDidMount(){
        console.log('3 componentDidMount - component montado');
    }

    componentDidUpdate(){
        console.log("evento disparado após a atualização do componente ...")
    }

    componentWillUnmount(){
        console.log("executado antes da remoção do component do virtualDOM ...")
    }

    // Segundo step do ciclo de vida de um componente de - execução do render
    render () {
        console.log ('2 render execuado');
        //return <div>component baseado em class state.name {this.state.name} / props.name {this.props.name} </div>
        return (<div>
            <p>name: {this.state.name} </p>
            <button onClick={() => this.setState({name : 'Teste'})}>Click Me</button>
        </div>);
    }


}

export default ClassComponent;