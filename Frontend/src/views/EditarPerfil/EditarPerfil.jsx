import { useState, useEffect } from "react";
import Button from "../../components/Button"
import VisualizarSenha from "../../components/VisualizarSenha"
import ShowPassword from "../../utils/funcoes"
import axios from 'axios'

export default () => {

        const [nome, setNome] = useState("")
        const [email, setEmail] = useState("")
        const [senha, setSenha] = useState("")
        const [telefone, setTelefone] = useState("")
        const [cidade, setCidade] = useState("")
        const [sobre, setSobre] = useState("")

        function editarUsuario() {

            const usuario = {
                nome: nome,
                email: email,
                senha: senha,
                cidade: cidade,
                telefone: telefone,
                sobre: sobre
        }

        axios.put('http://localhost:3000/usuario/62d30a35f79b0eda91e8d98f', usuario)
        
        .then(_ => {
            window.location.href = 'http://localhost:8000/perfil';
        })

        .catch(error => {
            alert(error.response.data.message)
        })
    }

        const [user, setUser] = useState("")
        useEffect(() => {
            axios.get('http://localhost:3000/usuario/62d30a35f79b0eda91e8d98f').then(result => {setUser(result.data)})
        }, [])
                
        return (
            
                <form action="" method="put" className="formularioEditarPerfil">

                    <h1 className="textoEditarPerfil"> Aqui você pode editar o seu perfil. </h1>

                        <h1>{user.nome}</h1>
                        <input className="inputEditarCadastro" type="text" id="nome" placeholder="Digite seu nome completo" onChange={(e) => {setNome(e.target.value)}}/>

                        <h1>Email</h1>
                        <input className="inputEditarCadastro" type="email" id="email" placeholder="Digite seu e-mail" onChange={(e) => {setEmail(e.target.value)}} />

                        <h1>Telefone</h1>
                        <input className="inputEditarCadastro" type="text" placeholder="Digite seu telefone" onChange={(e) => {setTelefone(e.target.value)}} />

                        <h1>Cidade</h1>
                        <input className="inputEditarCadastro" type="text" placeholder="Digite a cidade em que você mora" onChange={(e) => {setCidade(e.target.value)}} />

                        <h1>Sobre</h1>
                        <input className="inputEditarCadastro" type="text" placeholder="Digite uma breve descrição sobre você" onChange={(e) => {setSobre(e.target.value)}} />

                        
                    <div className="containerSenha">

                        <div>
                            <input className="inputSenhaEdicao" type="password" id="senha1" placeholder="Digite uma nova senha" onChange={(e) => {setSenha(e.target.value)}}/>
                            <VisualizarSenha className="olhoUsuario" onClick={() => ShowPassword("senha1")}/>
                        </div>

                        <div>
                            <input className="inputSenhaEdicao" type="password" id="senha2" placeholder="Repita sua nova senha" />
                            <VisualizarSenha className="olhoUsuario" onClick={() => ShowPassword("senha2")} />
                        </div>
                    </div>
                        <Button text="Confirmar" type="button" className="btnCadastrar" onClick={editarUsuario}>Cadastrar</Button>

                </form>
    )
}