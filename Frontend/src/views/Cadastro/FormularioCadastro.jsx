import { Component } from "react";
import { Button } from "../../components/Button"
import VisualizarSenha from "../../components/VisualizarSenha"
import ShowPassword from "../../utils/funcoes"

export default class Formulario extends Component {
    render() {
            
        return (
            
                <form action="" method="post" className="formulario">

                    <label for="nome">Nome</label>
                    <input type="text" id="nome" required placeholder="Digite seu nome completo" />

                    <label for="email">Email</label>
                    <input type="email" id="email" required placeholder="Digite seu e-mail" />

                    <label for="senha">Senha</label>
                    <div>
                        <input type="password" id="senha1" required placeholder="Crie uma senha" />
                        <VisualizarSenha onClick={() => ShowPassword("senha1")}/>
                    </div>

                    <label for="senha">Confirmar Senha</label>
                    <div>
                        <input type="password" id="senha2" required placeholder="Repita a senha criada" />
                        <VisualizarSenha onClick={() => ShowPassword("senha2")} />
                    </div>
                    
                    <Button text="Cadastrar" className="btnCadastrar">Cadastrar</Button>

                </form>
        )
    }
}