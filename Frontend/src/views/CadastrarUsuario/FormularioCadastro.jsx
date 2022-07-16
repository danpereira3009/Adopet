import { Component, useState } from "react";
import Button from "../../components/Button"
import VisualizarSenha from "../../components/VisualizarSenha"
import ShowPassword from "../../utils/funcoes"
import axios from 'axios'
import { Link } from 'react-router-dom'

export default () => {

        const [nome, setNome] = useState("")
        const [email, setEmail] = useState("")
        const [senha, setSenha] = useState("")

        function salvarUsuario() {

            const usuario = {
                nome: nome,
                email: email,
                senha: senha
        }

        axios.post('http://localhost:3000/usuario', usuario)
        
        .then(_ => {
            window.location.href = 'http://localhost:8000/perfil';
        })

        .catch(error => {
            alert(error.response.data.message)
        })
    }
            
        return (
            
                <form action="" method="post" className="formCadastroUser">
            
                        <input className="inputCadastrarUsuario" type="text" id="nome" required placeholder="Digite seu nome completo" onChange={(e) => {setNome(e.target.value)}}/>
                        <input className="inputCadastrarUsuario" type="email" id="email" required placeholder="Digite seu e-mail" onChange={(e) => {setEmail(e.target.value)}} />

                    <div className="inputSenha">
                        <input className="inputCadastrarUsuario" type="password" id="senha1" required placeholder="Crie uma senha" onChange={(e) => {setSenha(e.target.value)}}/>
                        <VisualizarSenha className="olhoUsuario" onClick={() => ShowPassword("senha1")}/>
                    </div>

                    <div className="inputSenha">
                        <input className="inputCadastrarUsuario" type="password" id="senha2" required placeholder="Repita a senha criada" />
                        <VisualizarSenha className="olhoUsuario" onClick={() => ShowPassword("senha2")} />
                    </div>
                    
                        <Button text="Cadastrar" type="button" className="btnCadastrar" onClick={salvarUsuario}>Cadastrar</Button>

                </form>
    )
}