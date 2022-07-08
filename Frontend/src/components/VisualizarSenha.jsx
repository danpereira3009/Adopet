import VisualizarSenha from '../assets/VisualizarSenha.svg'
import { Component } from "react";

export default class Olho extends Component {
    render() {
        return (

            <img 
            className="visualizarSenha" 
            src={VisualizarSenha}
            onClick={this.props.onClick}
            id={this.props.id}
            />

        )
    }
}