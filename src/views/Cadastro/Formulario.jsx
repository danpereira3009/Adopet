import { Component } from "react";

export default class Formulario extends Component {
    render() {
        return (
            
                <form action="" method="post" className="formulario">

                <label for="nome">Nome</label>
				<input type="text" id="nome" class="input-padrao" required placeholder="Digite seu nome completo" />

				<label for="email">Email</label>
				<input type="email" id="email" class="input-padrao" required placeholder="Digite seu e-mail" />

				<label for="senha">Senha</label>
				<input type="password" id="senha1" class="input-padrao" required placeholder="Crie uma senha" />

				<label for="senha">Confirmar Senha</label>
				<input type="password" id="senha2" class="input-padrao" required placeholder="Repita a senha criada" />

                </form>
           
        )
    }
}