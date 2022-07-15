import Lixeira from "./Lixeira.svg"
import { Component } from "react";

export default class Button extends Component {
    render() {
        return (

<img src={Lixeira} alt="deletar animal" onClick={this.props.onClick} className={this.props.className}/>

        )
    }
}