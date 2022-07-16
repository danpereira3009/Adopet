import { Component } from "react";
import Button from "../../components/Button"
import ShowPassword from "../../utils/funcoes"
import VisualizarSenha from "../../components/VisualizarSenha"
import axios from "axios";
import { useNavigate } from "react-router-dom"

export default () => { 

    let navigate = useNavigate();

        return (
            
                <form 
                    className="formulario"
                    onSubmit={ async (e) => {
                    e.preventDefault()
                    await axios.post('http://localhost:3000/usuario/login', {email: e.target.email.value, senha: e.target.senha.value})
                    navigate("/perfil")}}>

                    <input name="email" className="inputLogin" type="text" id="email" required placeholder="Digite seu e-mail" />

                    <div>
                        <input name="senha" className="inputLogin" type="password" id="senha" required placeholder="Digite sua senha" />
                        <VisualizarSenha className="olhoLogin" onClick={() => ShowPassword('senha')}/>
                    </div>
                    
                    <Button text="Entrar" type="button" className="btnLogin"></Button>

                </form>

           
    )
}