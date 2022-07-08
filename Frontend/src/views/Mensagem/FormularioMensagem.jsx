import { Component } from "react";
import { Button } from "../../components/Button"
import "./styles.sass"

export default class Formulario extends Component {
    render() {
        return (
            
                <form action="" method="post" className="formularioMensagem">

                    <label for="nome">Nome</label>
                    <input type="text" id="nome" required placeholder="Insira seu nome completo" />

                    <label for="telefone">Telefone</label>
                    <input type="text" id="telefone" required placeholder="Insira seu telefone" />

                    <label for="Nome do Animal">Nome do Animal</label>
                    <input type="text" id="nomeAnimal" required placeholder="Por qual animal você se interessou" />

                    <label for="mensagem">Mensagem</label>
                    <textarea type="text" className="sobre" rows="10" cols="95" required placeholder="Escreva uma mensagem" />

                    
                    
                    <Button text="Enviar" className="btnEnviar"></Button>

                </form>

           
        )
    }
}