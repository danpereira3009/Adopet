import { Component } from "react";
import { Button } from "../../components/Button"
import ShowPassword from "../../utils/funcoes"
import VisualizarSenha from "../../components/VisualizarSenha"


export default class Formulario extends Component {
    render() {
        return (
            
                <form action="" method="get" className="formularioLogin">

                    <label for="email">Email</label>
                    <input type="email" id="email" required placeholder="Digite seu e-mail" />

                    <label for="senha">Senha</label>
                    <div>
                        <input type="password" id="senha" required placeholder="Digite sua senha" />
                        <VisualizarSenha onClick={() => ShowPassword('senha')}/>
                    </div>
                    
                    <Button text="Entrar" className="btnLogin"></Button>

                </form>

           
        )
    }
}