import { Component } from "react";
import Button from "../../components/Button"
import VisualizarSenha from "../../components/VisualizarSenha"
import ShowPassword from "../../utils/funcoes"

export default class Formulario extends Component {
    render() {
            
        return (
            
                <form action="" method="post" className="formulario">

                    <div>
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" required placeholder="Digite seu nome completo" />
                    </div>

                    <div>
                        <label for="email">Email:</label>
                        <input type="email" id="email" required placeholder="Digite seu e-mail" />
                    </div>

                    <div className="inputSenha">
                        <label for="senha">Senha:</label>
                        <input type="password" id="senha1" required placeholder="Crie uma senha" />
                        <VisualizarSenha className="olho" onClick={() => ShowPassword("senha1")}/>
                    </div>

                    <div className="inputSenha">
                        <label for="senha">Senha:</label>
                        <input type="password" id="senha2" required placeholder="Repita a senha criada" />
                        <VisualizarSenha className="olho" onClick={() => ShowPassword("senha2")} />
                    </div>
                    
                    <Button text="Cadastrar" className="btnCadastrar">Cadastrar</Button>

                </form>
        )
    }
}