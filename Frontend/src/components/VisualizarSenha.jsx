import VisualizarSenha from '../assets/VisualizarSenha.svg'
import { Component } from "react";

export default class Olho extends Component {
    render() {
        return (

            <img 
            className={this.props.className} 
            src={VisualizarSenha}
            onClick={this.props.onClick}
            id={this.props.id}
            />

        )
    }
}