import React from "react";

// Componentes react baseados em classes estao caindo em desuso

export default class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message: 'Componente com Classe'
        }
    }
    componentDidMount(){
        print('é executado quando o usuario acessa pela primeira vez')
    }
    render(){
        return <div>
            <h1>Ola mundo!</h1>
            <h1>{this.state.message}</h1>
        </div>
    }   
}