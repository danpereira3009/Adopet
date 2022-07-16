import { Component } from "react";
import Button from "../../components/Button"
import "./styles.sass"

export default class Formulario extends Component {
    render() {
        return (
            <form action="" method="post" className="formulario">
                <input className="inputMensagem" type="text" id="nome" required placeholder="Insira seu nome completo" />
                <input className="inputMensagem" type="text" id="telefone" required placeholder="Insira seu telefone" />
                <input className="inputMensagem" type="text" id="nomeAnimal" required placeholder="Por qual animal você se interessou" />
                <textarea type="text" className="mensagemAoTutor" rows="10" cols="95" required placeholder="Escreva uma mensagem" />              
                <Button text="Enviar" className="btnEnviar"></Button>
            </form>
        )
    }
}