import { Component } from "react";
import Button from "../../components/Button"
import ShowPassword from "../../utils/funcoes"
import VisualizarSenha from "../../components/VisualizarSenha"


export default class Formulario extends Component {
    render() {
        return (
            
                <form action="" method="get" className="formulario">

                <div className="Usuario">
                    <label for="user">Usuario:</label>
                    <input type="text" id="email" required placeholder="Digite seu nome de usuário, e-mail ou cpf" />
                </div>

                
                <div>
                    <label for="senha">Senha:</label>
                    <input type="password" id="senha" required placeholder="Digite sua senha" />
                    <VisualizarSenha className="olho" onClick={() => ShowPassword('senha')}/>
                </div>
                
                <Button text="Entrar" className="btnLogin"></Button>

                </form>

           
        )
    }
}